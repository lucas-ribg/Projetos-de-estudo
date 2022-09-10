import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { EstacaoClimatica } from './EstacaoClimatica'

class App extends React.Component {
    /*     constructor(props) {
            super(props)
            this.state = {
                latitude: null,
                longitude: null,
                estacao: null,
                data: null,
                icone: null,
                mensagemDeError: null
            }
            console.log("Construtor")
        }
     */
    state = {
        latitude: null,
        longitude: null,
        estacao: null,
        data: null,
        icone: null,
        mensagemDeError: null
    }

    componentDidMount() {
        console.log("CompoenentDidMount")
        this.obterLocalizacao()
    }
    compoenentDidUpdate() {
        console.log("CompoenentDidUpdate")
    }
    componentWillUnmount() {
        console.log("CompoenentWillUnmount")
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        const d1 = new Date(anoAtual, 5, 21)
        const d2 = new Date(anoAtual, 8, 21)
        const d3 = new Date(anoAtual, 11, 21)
        const d4 = new Date(anoAtual, 2, 21)
        const sul = latitude < 0
        if (data >= d1 && data < d2)
            return sul ? 'Inverno' : 'Verão'
        if (data >= d2 && data < d3)
            return sul ? 'Primavera' : 'Outono'
        if (data >= d3 && data < d4)
            return sul ? 'Verão' : 'Inverno'
        return sul ? 'Outono' : 'Primavera'
    }

    icones = {
        'Primavera': 'fa-seedling',
        'Verão': 'fa-umbrella-beach',
        'Outono': 'fa-tree',
        'Inverno': 'fa-snowman'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                let data = new Date()
                let estacao = this.obterEstacao(data, posicao.coords.latitude)
                let icone = this.icones[estacao]
                this.setState({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    estacao: estacao,
                    data: data.toLocaleDateString(),
                    icone: icone
                })
            },
            (err) => this.setState({
                mensagemDeError: "Tente novamente mais tarde"
            })
        )
    }

    render() {
        console.log("render")
        return (
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <EstacaoClimatica 
                        icone={this.state.icone}
                        estacao={this.state.estacao}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        data={this.state.data}
                        mensagemDeError={this.state.mensagemDeError}
                        obterEstacao={this.state.obterEstacao}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
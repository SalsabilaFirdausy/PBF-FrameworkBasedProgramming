import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

var total, subtotal, no;
class Cart extends Component {
    state = {
        keranjang: [],
    };
    componentDidMount() {
        this.ambilDataKeranjang();
    }
    ambilDataKeranjang = () => {
        fetch("http://localhost:3002/keranjang")
            .then((response) => response.json())
            .then((jsonHasilAmbilDariAPI) => {
                this.setState({
                    keranjang: jsonHasilAmbilDariAPI,
                });
            });
    };
    listKeranjang() {
        total = 0;
        subtotal = 0;
        no = 0;
        return this.state.keranjang.map((keranjang) => {
            subtotal = keranjang.harga ;
            total = total + keranjang.harga ;
            no += 1;
            return (
                <tr key={keranjang.id}>
                    <th scope="row">{no}</th>
                    <td>{keranjang.nama}</td>
                    <td>Rp{keranjang.harga}</td>
                    <td>Rp{subtotal}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="col-lg-8">
                <div className="container">
                    <div className="row">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr> 
                                </thead>
                            <tbody>{this.listKeranjang()}</tbody>
                            <tfoot className="font-weight-bold text-black bg-info">
                                <td className="text-center" colSpan="3">
                                    Total
                                </td>
                                <td>Rp{total}</td>
                            </tfoot>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cart;

import React, { useEffect, useState } from 'react'
import { getPokenomData } from './PokemonClient';
import Button from 'react-bootstrap/Button';


export default function Pokemon({ id, onClick }) {

    const [picture, setPicture] = useState('')
    const [name, setName] = useState('')
    const [types, setTypes] = useState([])

    useEffect(() => {
        getPokenomData(id).then(data => {
            setPicture(data.sprites.other.dream_world.front_default);
            setName(data.name);
            let buttonTypes = data.types.map(type => type.type.name);
            setTypes(buttonTypes);
        })
    }, [])

    const getButtonColor = (element) => {
        switch (element) {
            case "grass": return "btn btn-success";
            case "poison": return "btn btn-poison";
            case "fire": return "btn btn-danger";
            case "flying": return "btn btn-info";
            case "water": return "btn btn-primary";
            case "bug": return "btn btn-secondary";
            case "ground": return "btn btn-dark";
            case "electric": return "btn btn-warning";
            case "normal": return "btn btn-light";
            case "failry": return "btn btn-outline-dark";
            default: return "btn btn-outline-primary";
        }
    }

    return (
        <div className="border border-dark  PokeBox" onClick={onClick}>
            <div >
                <div className=''>
                    <img alt={"not found"} src={`${picture}`} />
                </div >
                <div className="HeaderButtons">
                    <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
                    <div className='Buttons'>
                        {
                            types.map((el, i) =>
                                <Button key={i} variant={getButtonColor(el)} className='InsideButtons' >{el}</Button>

                            )

                        }
                    </div>
                </div>
            </div>

        </div >
    )
}
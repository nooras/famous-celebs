// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './AllCelebs.css'
import celebs from '../celebrities.json';

function AllCelebs(){
    const [editId, setEditId] = useState("");

    const optionValue = ['MALE', 'FEMALE', 'TRANSGENDER', 'RATHER NOT TO SAY', 'OTHER'];

    const deleteOnClick = (i) => {
        console.log(i);
        window.confirm("Are you sure you want to delete?");
    }

    const editOnClick = (i) => {
        console.log(i);
        setEditId(i);
    }

    const cancelOnClick = (i) => {
        console.log(i);
        setEditId('');
    }

    const okOnClick = (i) => {
        console.log(i);
        setEditId('');
    }

    return(
        <div className= "AllCelebs container">
            <Accordion className=''>
                {celebs.map((celeb, i) => {
                    const celebName = celeb.first + " " + celeb.last;
                    const age = Math.floor((new Date() - new Date(celeb.dob).getTime()) / 3.15576e+10);

                    return (
                        <Accordion.Item key={i} eventKey={i} className='celeb m-2'>
                        <Accordion.Header className='celeb-header d-flex justify-content-between bg-transparent' style={{'--bs-accordion-bg': 'none'}}>
                            <div className='d-flex'>
                                <img className='rounded-circle' width='60' src={celeb.picture} alt={i}/>
                                { editId === i ? <input className='my-auto mx-2 p-2' defaultValue={celebName} /> :
                                <h5 className='my-auto px-2'>{celebName}</h5> }
                            </div>  
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <div className="row text-start">
                                    <div className="col-sm">
                                        <p className='side-heading'>Age</p>
                                        { editId === i ? <input className='my-auto p-2' type="number" pattern="[0-9]*" defaultValue={age} style={{width:'150px'}} /> :
                                        <p>{age} Years</p> }
                                    </div>
                                    <div className="col-sm">
                                        <p className='side-heading'>Gender</p>
                                        { editId === i ? 
                                            <select className='my-auto mt-1 p-2' defaultValue={celeb.gender.toUpperCase()} name={celeb.gender} id="">
                                                {optionValue.map((v, i) => {
                                                    return (<option key={v} defaultValue={v}>{v.toUpperCase()}</option>)
                                                })}
                                            </select>
                                        :
                                        <p>{celeb.gender}</p> }
                                    </div>
                                    <div className="col-sm">
                                        <p className='side-heading'>Country</p>
                                        { editId === i ? <input className='my-auto p-2' defaultValue={celeb.country} style={{width:'150px'}}/> :
                                        <p>{celeb.country}</p> }
                                    </div>
                                </div>
                                <div className='text-start'>
                                    <p className='side-heading'>Description</p>
                                    { editId === i ? <textarea defaultValue={celeb.description} className='form-control' rows="5"></textarea> :
                                    <p>{celeb.description}</p>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-end pt-2'>
                            { editId === i ? 
                                <>
                                <img style={{paddingRight:'10px'}} src="https://img.icons8.com/ios/32/ff0000/cancel.png" onClick={() => cancelOnClick(i)} alt="cancel"/>
                                <img src="https://img.icons8.com/ios/32/50B000/ok--v1.png" onClick={() => okOnClick(i)} alt="ok"/></>
                            :
                                <>
                                <img style={{paddingRight:'10px'}}src="https://img.icons8.com/windows/32/ff0000/waste.png" onClick={() => deleteOnClick(i)} alt="waste"/>
                                {age >= 18 && <img src="https://img.icons8.com/windows/32/008CB0/edit--v1.png" onClick={() => editOnClick(i)} alt="edit"/>}</>
                            }
                            </div>
                        </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
        );
       
}

export default AllCelebs;

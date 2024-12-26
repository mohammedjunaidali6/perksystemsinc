import React,{useState} from 'react';
import contact from './contact.jpg';

const Contactus = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState();
    const formSubmit=(e)=>{
        e.preventDefault();

        if(name!=="" || email!=="" || phone!==""){
            alert('Contact details saved successfully');
            setName('');
            setEmail('');
            setPhone('');
        }
    }

    return (
        <div>
            <div className='contact'>
                <img src={contact} alt='contact banner' id="contactbannerimg"/>
                <h1 id="contacthead">Contact</h1>
            </div>
            <div className=' contactdiv'>
                <div id="mapframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.011220944747!2d-97.02098602457141!3d32.92430177644493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2a32884c138b%3A0xb2c58e6e943cd846!2sPERK%20SYSTEMS!5e0!3m2!1sen!2sin!4v1693294117187!5m2!1sen!2sin" 
                id="mapsize" allowfullscreen="">
                </iframe>
                </div>
                <div id="contactparas">
                    <h5>Contact Us</h5>
                   <ul>
                    <li><i class="bi bi-telephone"></i>&nbsp;&nbsp; 214-842-6969</li>
                    <li><i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp; 214-614-4848</li>
                    <li><i class="bi bi-envelope"></i>&nbsp;&nbsp; info@perksys.com</li>
                    <li><i class="bi bi-journal"></i>&nbsp;&nbsp; www.perksys.com</li>
                    <li><i class="bi bi-align-top"></i>&nbsp;&nbsp; Perk Systems, Inc.8505, Freeport Parkway, Suite#385 Irving, TX-75063
                    </li>
                   </ul>
                </div>
            </div>
            <div className='contactinputs'>
                    <h6>Get in Touch</h6>
                    <form onSubmit={formSubmit}>
                    <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} required/>
                    <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} required/>
                    <input type='text' value={phone} placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} required/>
                    <input type='textarea' placeholder='Message'/>
                    <button id="contactbtn" type='submit' className='btn btn-danger p-2'>Submit</button>
                    </form>
                </div>

        </div>
    );
};

export default Contactus;
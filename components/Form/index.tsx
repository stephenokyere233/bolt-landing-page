import { CITIES } from '@/constants/cities';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [selectedCity, setSelectedCity] = useState<string>("")
    const [agree, setAgree] = useState<boolean>(false)

    const [emailClass, setEmailClass] = useState<string>("")
    const [phoneClass, setPhoneClass] = useState<string>("");
    const [agreeClass, setAgreeClass] = useState<string>("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setIsSubmitted(true);
        console.log("submitted");

        if (email === '') {
            setEmailClass('is-invalid');
        } else {
            setEmailClass('is-valid');
        }

        if (phone === '') {
            setPhoneClass('is-invalid');
        } else {
            setPhoneClass('is-valid');
        }

        if (agree) {
            setAgreeClass('');
        } else {
            setPhoneClass('is-invalid');
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
        if (value.trim() !== "") {
            setEmailClass("is-valid");
        } else {
            setEmailClass("is-invalid");
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPhone(value);
        if (value.trim() !== "") {
            setPhoneClass("is-valid");
        } else {
            setPhoneClass("is-invalid");
        }
    };

    const handleAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setAgree(checked);
        if (checked) {
            setAgreeClass("");
        } else {
            setAgreeClass("is-invalid");
        }
    };
    return (
        <>
            <form
                className=' bg-light needs-validation p-4'
                style={{borderRadius:"30px"}}
                noValidate
                onSubmit={handleSubmit}
            >
                <div>
                    <h3 className='font-weight-bold'>Become a Bolt driver</h3>
                    <p>
                        If you have multiple cars <Link href='#'>sign up as a fleet owner</Link>
                    </p>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email address</label>
                    <input
                        type='email'
                        name='email'
                        className={`form-control ${emailClass}`}
                        style={{ height: '60px' }}
                        placeholder='Enter email'
                        id='email'
                        required
                        onChange={handleEmailChange}
                    />
                    {((isSubmitted && !email) || !email) && (
                        <div className='invalid-feedback'>Email is required.</div>
                    )}
                </div>

                <div className='mb-3'>
                    <label htmlFor='phone'>Phone number</label>
                    <div className={`input-group has-validation}`}  >
                        <button
                            className='btn border bg-light dropdown-toggle'
                            type='button'
                            name='phone'
                            data-bs-toggle='dropdown'
                            style={{ height: '60px' }}
                            aria-expanded='false'
                        >
                            +233
                        </button>
                        <input
                            type='tel'
                            name='phone'
                            className={`form-control rounded-1 ${phoneClass}`}
                            aria-label='Text input with dropdown button'
                            required
                            style={{ width: "200px", height: '60px' }}
                            onChange={handlePhoneChange}
                        />
                        {((isSubmitted && !phone) || !phone) && (
                            <div className='invalid-feedback'>Phone is required.</div>
                        )}
                    </div>
                </div>

                <div className='mb-3'>
                    <label htmlFor='city'>City</label>
                    <select
                        className={`custom-select`}
                        style={{ height: '60px' }}
                        id='city'
                        defaultValue={'0'}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        {CITIES.map((city, index) => (
                            <option style={{ height: '60px' }} key={index} value={city.label}>
                                {city.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={`form-group form-check mb-3`}>
                    <input
                        className={`form-check-input ${agreeClass}`}
                        type='checkbox'
                        name='agree'
                        id='agree'
                        required
                        onChange={handleAgreeChange}
                    />
                    <label className='form-check-label' htmlFor='agree'>
                        I agree to Bolt&apos;s <Link href='#'>Terms of Service</Link> and{' '}
                        <Link href='#'>Privacy Policy</Link>
                    </label>
                </div>

                <button
                    className='btn text-uppercase rounded-pill rounded-5 text-light w-100 py-3'
                    style={{ background: '#34d186' }}
                >
                    sign up as a driver
                </button>
            </form>
        </>
    );
};

export default Form;

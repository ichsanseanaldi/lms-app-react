import React from 'react'
import { StyledInput } from '../../style/components/StyledInput'
import { StyledRadio } from '../../style/components/StyledRadio'

export const AddSoalTemplate = (props) => {
    return (
        <div key={props.id}>
            <div className='flex p-10-all'>
                <div className='p-20-lr'>
                    <h1>
                        {props.nomorSoal}.
                    </h1>
                </div>
                <div className='flex w-100'>
                    {props.siswa ?

                        <h2 className='bg-y p-10-all border-round w-100'>{props.valuePS}</h2>

                        :

                        <StyledInput type="text" name={props.valuePS} value={props.valuePS} onChange={props.onChangePS} placeholder={props.PPS} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                    }
                </div>
            </div>
            <div className='flex flex-j-end'>
                <div className='w-100'>
                    <div className='flex flex-center'>
                        <div className='p-20-lr m-t-10'>
                            <StyledRadio type="radio" name={props.id ? props.id : "option"} id="optionAradio" value='option_a' onChange={props.onChangeKey} disabled={props.disabled} required />
                        </div>
                        <div className='p-20-lr'>
                            <h1>
                                a.
                            </h1>
                        </div>
                        <div className='flex p-20-lr'>
                            <StyledInput type="text" name={props.valueA} value={props.valueA} onChange={props.onChangeA} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                        </div>
                    </div>
                    <div className='flex flex-center'>
                        <div className='p-20-lr m-t-10' >
                            <StyledRadio type="radio" name={props.id ? props.id : "option"} id="optionBradio" value='option_b' onChange={props.onChangeKey} disabled={props.disabled} required />
                        </div>
                        <div className='p-20-lr'>
                            <h1>
                                b.
                            </h1>
                        </div>
                        <div className='flex p-20-lr'>
                            <StyledInput type="text" name={props.valueB} value={props.valueB} onChange={props.onChangeB} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                        </div>
                    </div>
                    <div className='flex flex-center'>
                        <div className='p-20-lr m-t-10' >
                            <StyledRadio type="radio" name={props.id ? props.id : "option"} id="optionCradio" value='option_c' onChange={props.onChangeKey} disabled={props.disabled} required />
                        </div>
                        <div className='p-20-lr'>
                            <h1>
                                c.
                            </h1>
                        </div>
                        <div className='flex p-20-lr'>
                            <StyledInput type="text" name={props.valueC} value={props.valueC} onChange={props.onChangeC} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                        </div>
                    </div>
                    <div className='flex flex-center'>
                        <div className='p-20-lr m-t-10' >
                            <StyledRadio type="radio" name={props.id ? props.id : "option"} id="optionDradio" value='option_d' onChange={props.onChangeKey} disabled={props.disabled} required />
                        </div>
                        <div className='p-20-lr'>
                            <h1>
                                d.
                            </h1>
                        </div>
                        <div className='flex p-20-lr'>
                            <StyledInput type="text" name={props.valueD} value={props.valueD} onChange={props.onChangeD} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                        </div>
                    </div>
                    <div className='flex flex-center'>
                        <div className='p-20-lr m-t-10' >
                            <StyledRadio type="radio" name={props.id ? props.id : "option"} id="optionEradio" value='option_e' onChange={props.onChangeKey} disabled={props.disabled} required />
                        </div>
                        <div className='p-20-lr'>
                            <h1>
                                e.
                            </h1>
                        </div>
                        <div className='flex p-20-lr'>
                            <StyledInput type="text" name={props.valueE} value={props.valueE} onChange={props.onChangeE} disabled={props.disabled} border={props.border} readOnly={props.read} required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

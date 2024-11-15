import React, { useEffect } from 'react'

export function InputTemp(Data) {



  
  return (
    <>
      <div className="input-cnt">
        <input onInput={''} type={Data.inputType} name={Data.name} placeholder={Data.placeHolder} />

        <div className="input-err">{Data.Err}</div>
      </div>
    </>
  )
}


export function BtnTemp({Title, ClickListner}) {
  
  return (
    <>
      <div className="input-cnt">
        <button onClick={ClickListner}>
          {
            Title
          }
        </button>
      </div>
    </>
  )
}


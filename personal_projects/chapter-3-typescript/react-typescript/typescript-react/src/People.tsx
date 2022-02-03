import React from 'react'
import messageHoc from './Hoc'

const characteristics =(props:any):any=><p>{props.eye},{props.skin}</p>

const People= messageHoc(characteristics)
export default People

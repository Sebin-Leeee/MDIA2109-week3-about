import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import Card2 from '../components/About'
import Link from 'next/link'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'

export default function About() {

    console.log(data);
    const [information, setInformation] = useState([...data])
    
    return(
        <><div className={styles.heading}>About Our Team</div>
        <div className={styles.center}>
            <div className={styles.subheading}>
            <img className={styles.profile} src={'icon/person.png'} width="200"/> 
                {information && information.map((info, index) => {
                    if (info.employeeNumber === 1) {
                        return (
                            <Card2 key={index} degree={info.employeeNumber} backgroundColor="green"/>
                        )
                    }
                })} 

                {information && information.map((info, index) => {
                    if (info.firstName === "Sebin Lee") {
                        return (
                            <Card2 key={index} degree={info.firstName}/>
                        )
                    }
                })}

                {information && information.map((info, index) => {
                    if (info.department === "Marketing") {
                        return (
                            <Card2 key={index} degree={info.department}/>
                        )
                    }
                })}     
            </div>


            <div className={styles.subheading}>
            <img className={styles.profile} src={'icon/person.png'} width="200"/> 
                {information && information.map((info, index) => {
                    if (info.employeeNumber === 2) {
                        return (
                            <Card2 key={index} degree={info.employeeNumber} font="20"/>
                        )
                    }
                })} 

                {information && information.map((info, index) => {
                    if (info.firstName === "Mingyu Lee") {
                        return (
                            <Card2 key={index} degree={info.firstName} font="22"/>
                        )
                    }
                })}

                {information && information.map((info, index) => {
                    if (info.department === "UI/UX Design") {
                        return (
                            <Card2 key={index} degree={info.department} font="20"/>
                        )
                    }
                })}     
            </div>

            <div className={styles.subheading}>
            <img className={styles.profile} src={'icon/person.png'} width="200"/> 
                {information && information.map((info, index) => {
                    if (info.employeeNumber === 3) {
                        return (
                            <Card2 key={index} degree={info.employeeNumber}/>
                        )
                    }
                })} 

                {information && information.map((info, index) => {
                    if (info.firstName === "Elly Park") {
                        return (
                            <Card2 key={index} degree={info.firstName}/>
                        )
                    }
                })}

                {information && information.map((info, index) => {
                    if (info.department === "Customer Service") {
                        return (
                            <Card2 key={index} degree={info.department} />
                        )
                    }
                })}     
            </div>
        </div></>
    )
}

  
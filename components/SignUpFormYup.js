'use client'
import { useFormik } from "formik"
import * as Yup from 'yup';

const SignUpFormYup = ()=>{
    const formik = useFormik({
        initialValues:{
            fName :'',
            lName:'',
            email:''
        },
        validationSchema: Yup.object({
            fName:Yup.string()
            .max(15,'Must be 15 charater or less')
            .required('Required'),
            lName: Yup.string()
            .max(15,'Must be 15 character or less').required('Required'),
            email:Yup.string().email('Invalid email address').required('Required')
        }),
        onSubmit:values=>{
            console.log('values')
        }
    })
    console.log(formik,'formik')
    return(
        <form onSubmit={formik.handleSubmit}>
            <input id="fName" name="fName" type="text" onChange={formik.handleChange} value={formik.values.fName} onBlur={formik.handleBlur}/>
            {formik.errors.fName?<span>{formik.errors.fName}</span>:null}

            <input id="lName" name="lName" type="text" onChange={formik.handleChange} value={formik.values.lName} onBlur={formik.handleBlur}/>
            {formik.errors.lName?<span>{formik.errors.lName}</span>:null}
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
            {formik.errors.email?<span>{formik.errors.email}</span>:null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUpFormYup
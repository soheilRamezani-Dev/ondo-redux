
const FormInput = ({id,type,title,formText,value,setvalue}) => {

    const ChangeInput = (e)=> {
        const inputvalue = e.target.value;
        const inputname = e.target.name;
        setvalue({...value,[inputname]:inputvalue} );
    }

    return <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input name={id} type={type} className="form-control" id={id} value={value.id} onChange={ChangeInput} />
    <div className="form-text">{formText}</div>
</div>
}
 
export default FormInput ;
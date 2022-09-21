const FormInput = ({id,type,title,formText}) => {
    return <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} className="form-control" id={id}/>
    <div className="form-text">{formText}</div>
</div>
}
 
export default FormInput ;
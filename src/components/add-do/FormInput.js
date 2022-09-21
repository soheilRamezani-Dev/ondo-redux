const FormInput = ({id,type,title,formText}) => {
    return <div class="mb-3">
    <label htmlFor={id} class="form-label">{title}</label>
    <input type={type} class="form-control" id={id}/>
    <div class="form-text">{formText}</div>
</div>
}
 
export default FormInput ;
import styles from '../styles/componentStyles/textBox.module.css'

const TextBox = ({ type, placeholder, name, value, onChange }: { type: string, placeholder: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div>
            <input className={styles.textbox} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required />
        </div>
    )
}

export default TextBox

type ButtonComponentProps = {
    buttonName: string;
};

const buttonStyle = {
    backgroundColor: 'royalblue',
    color: 'white',
    margin: '10px'
};

const ButtonComponent = ({buttonName}: ButtonComponentProps) => (
    
    <button style={buttonStyle}>{buttonName}</button>
);

export default ButtonComponent;
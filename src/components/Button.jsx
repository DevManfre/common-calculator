function Button({ children, onClick }) {
    return (
        <div className="button" onClick={onClick} value={children}>{children}</div>
    );
}

export default Button;
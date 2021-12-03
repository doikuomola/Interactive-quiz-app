const ErrorMessage = ({ children }) => {
    return (
        <div
            style={{
                width: "100%",
                padding: 20,
                marginBottom: 10,
                borderRadius: 4,
                backgroundColor: "crimson",
                textAlign: "center",
                color: "white",
                textTransform: "uppercase",
            }}
        >
            {children}
        </div>
    );
};

export default ErrorMessage;

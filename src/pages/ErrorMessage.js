const ErrorMessage = ({ children }) =>{
    return(
        <div
        style={{
            width:'900px',
            marginBottom:10,
            borderRadius:3,
            backgroundColor:'#00416a',
            color:'white',
            textAlign:'center',
            marginLeft:'150px'
            

        }}
        >
            {children}
            
        </div>


    );
};
export default ErrorMessage;
const initialState ={
    customers:[
        {id:'1', forename:'Matthew', surname:'Stone', email:'mattstone79@hotmail.com'},
        {id:'2', forename:'Joanne', surname:'Stone', email:'mattstone79@hotmail.com'},        
    ],
    quotes:[
        {id:'1', documentNo:'QTE000001' ,forename:'Matthew', surname:'Stone', email:'mattstone79@hotmail.com'},
        {id:'2', documentNo:'QTE000002' ,forename:'Tim', surname:'Latter', email:'mattstone79@hotmail.com'},

    ],
    invoices:[
        {id:'1', documentNo:'INV000001' ,forename:'Matthew', surname:'Stone', email:'mattstone79@hotmail.com'},
        {id:'2', documentNo:'INV000002' ,forename:'Tim', surname:'Latter', email:'mattstone79@hotmail.com'},

    ],
    certificates:[
        {id:'1', documentNo:'CERT00001' ,forename:'Matthew', surname:'Stone', email:'mattstone79@hotmail.com'},
        {id:'2', documentNo:'CERT000002' ,forename:'Tim', surname:'Latter', email:'mattstone79@hotmail.com'},

    ]    
}

const temp = (state = initialState, action) => {
    return state;
}

export default temp
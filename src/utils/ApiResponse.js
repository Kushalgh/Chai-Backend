class ApiResponse {
    constructor(statusCode,data,message ="Success"){
        this.statusCode =statusCode
        this.dtaa = data
        this.message =message
        this.success = statusCode < 400 
    }
}
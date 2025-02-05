class ApiProcessor{

    constructor(url){
        this.url = url;
    }

    setUrl(url){
        this.url = url;
    }

    async get(){
        try{
            const response = await fetch(this.url);

            if(response.ok == false){
                return {"error": "true", "message": response.status};
            }

            const result = await response.json();
            return result;

        }catch(error){
            return {"error": "true", "message": error, detail: error.message};
        }
    }

    async post(payload){
        try{
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if(response.ok == false){
                return {"error": "true", "message": response.status};
            }

            const result = await response.json();
            return result;

        }catch(error){
            return {"error": "true", "message": error, detail: error.message};
        }
    }

    async securePost(payload){
        try{
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                },
                body: JSON.stringify(payload),
            });

            if(response.ok == false){
                return {"error": "true", "message": response.status};
            }

            const result = await response.json();
            return result;

        }catch(error){
            return {"error": "true", "message": error, detail: error.message};
        }
    }

    async secureGet(){
        try{
            const response = await fetch(this.url,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                }
            });

            if(response.ok == false){
                return {"error": "true", "message": response.status};
            }

            const result = await response.json();
            return result;

        }catch(error){
            return {"error": "true", "message": error, detail: error.message};
        }
    }

}

export default ApiProcessor;
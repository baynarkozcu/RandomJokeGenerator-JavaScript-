class JokeServices{

    constructor(){
        this.baseURL = 'https://api.chucknorris.io/';
        this.axios = axios.create({
            baseURL : this.baseURL,
        });
    }

    async getRandomJoke(){
        try{
            const jokeResponse = await this.axios.get('jokes/random');
            console.log(jokeResponse.data.value);
            return jokeResponse.data.value;
        }catch(e){
            console.log(e);
        }
    }
}
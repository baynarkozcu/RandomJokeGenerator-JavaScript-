class Screen{

    constructor(){
        this.generateJokeButton = document.getElementById('generateJoke');
        this.generateJokeButton.addEventListener('click', ()=>this.getRandomJokeAndImage());
    }

    async getRandomJokeAndImage(){

            const randomImage = await new ImageServices().getRandomImage();

            const randomJoke = await new JokeServices().getRandomJoke();

            const result = {
                image: randomImage,
                joke: randomJoke
            }

            this.viewOnScreen(result);

    }

    viewOnScreen(result){
        document.querySelector('.sonuc').innerHTML = `                <div class="card">
        <div class="card-image">
          <figure class="image is-19by12">
            <img src="${result.image}" alt="Placeholder image">
          </figure>
        </div>

        <div class="section">
            <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-danger"> ${result.joke}</p>
                   
                  </div>
                </div>
            
              </div>
        </div>



      </div>`;


    }
}
class Count {

	pregunta = "";
	favor = 0;
	contra = 0;
	abtencion = 0;

	votar(num) {
		switch (num) {
			case 1: this.favor++;console.log("DDff");break;
			case 2: this.contra++;break;
			case 3: this.abtencion++;break;
			default: return;
		}
	}

	Favor() {
		this.favor=this.favor+1;
		console.log(this.favor);
	}
	Contra() {
		this.contra++;
	}
	Abt() {
		this.abtencion++;
	}

	total() {
		console.log(this.favor+this.contra+this.abtencion);
		document.getElementById('vote_count').innerHTML = (this.favor+this.contra+this.abtencion)+"";
	}


}
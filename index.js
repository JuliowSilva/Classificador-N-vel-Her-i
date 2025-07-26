
        function calnivel(xp){
        let nivel;
        
        if (xp <= 1000) {nivel = "Ferro";} 
        else if (xp <= 2000) {nivel = "Bronze";}
        else if (xp <= 5000) {nivel = "Prata";}
        else if (xp <= 7000) {nivel = "Ouro";}
        else if (xp <= 8000) {nivel = "Platina";}
        else if (xp <= 9000) {nivel = "Ascendente";}
        else if (xp <= 10000) {nivel = "Imortal";}
        else {nivel = "Radiante";}
        
        return nivel;
        }

        while (true) {
        let nome = prompt("Digite seu nome: | ou deixe em branco para sair");
        if (!nome) break;

        let xp = Number(prompt("Digite sua quantidade de experiencia: "));
        if (isNaN(xp)) {alert("Digite sua quantidade de experiencia:");
        continue;} 
              
        
        let nivel = calnivel(xp);

        alert(`O Herói de nome ${nome} está no nível de ${nivel}`);

        }
        





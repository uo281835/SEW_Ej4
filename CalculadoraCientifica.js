class Calculadora{

    
    constructor(){
        this.almacenado =0;
        this.actual =0;
        this.seHaHechoUnaOperacion = false;
        document.addEventListener('keydown', (event) => {
            var keyName = event.key;
            var valor = keyName;
            if(valor == 'm')
                this.multiplicar();
            else if(valor == 'd')
                this.dividir();
           
            else if(valor == "Enter")
                this.evaluar();
            else if(valor == 'p')
                this.porcentaje();
            else if(valor =='c')
                this.reset();
            else if(valor == 'o')
                this.trueReset();
            else if(valor!="Enter"&&valor!="r"&&
                (Number(valor)!==NaN || valor =='+'|| valor =='-'|| valor =='.'))
                    this.add(valor);
                
          });
    }
    add(i){
        if(!this.seHaHechoUnaOperacion){
            this.actual = document.getElementsByName('output')[0].value;
            this.actual+=i;
        }
        else{
            this.actual =i;
            this.seHaHechoUnaOperacion = false;
        }
        
        document.getElementsByName('output')[0].value= this.actual;
        
    }
    multiplicar(){
        this.add('*');
    }
    dividir(){
        this.add('/');
    }
    sumar(){
        this.add('+');
    }
    restar(){
        this.add('-');
    }

    
    add2(i){
        add(i);
        add(i);
    }
    remove(){
        this.actual = document.getElementsByName('output')[0].value;
        this.actual-=i;
        document.getElementsByName('output')[0].value= actual;
    }
    evaluar(){
        this.actual = document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual));
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    porcentaje(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual))*0.01*Number(this.almacenado);
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    raiz(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual)**(1/2));
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    reset(){
        this.actual = 0;
        document.getElementsByName('output')[0].value= this.actual;
    }
    trueReset(){
        this.actual = 0;
        document.getElementsByName('output')[0].value= this.actual;
        this.almacenado = 0;
    }
    cambiarSigno(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.actual));
        if(this.almacenado>0)
            document.getElementsByName('output')[0].value= "-"+this.almacenado;
        else
        document.getElementsByName('output')[0].value= this.almacenado;
        
    }


}

class CalculadoraCientifica extends Calculadora{

    constructor(){
        
        document.addEventListener('keydown', (event) => {
            var keyName = event.key;
            var valor = keyName;
             if(valor == 'r')
            this.raiz();
            else if(valor == 'a')
            this.porcentaje();
            
            else if(valor == 'u')
            this.sin();
            else if(valor == 'i')
            this.cos();
            else if(valor == 'p')
            this.tan();
            else if(valor == 'Shift')
            this.toggle();
            else if(valor == 'q')
            this.exp();
            else if(valor == 'w')
            this.exp10();
            else if(valor == 'l')
            this.log();
            else if(valor == 'k')
            this.log10();
            else if(valor == 'z')
            this.square();
            else if(valor == 'x')
            this.pi();
            else if(valor == 'p')
            this.tan();
            else if(valor == 'Shift')
            this.toggle();
            else if(valor == '¡')
            this.factorial();
            else if(valor == 'n')
            this.add('(');
            else if(valor == 'm')
            this.add(')');
            else if(valor == 'v')
            this.elevar();
          });
          super();
    }
    
    sin(){
        this.actual = document.getElementsByName('output')[0].value;
        if(!this.toggled)
         this.almacenado= Math.sin(this.actual);
        else
        this.almacenado= Math.asin(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    cos(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        if(!this.toggled)
         this.almacenado= Math.cos(this.actual);
        else
        this.almacenado= Math.acos(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    tan(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        if(!this.toggled)
        this.almacenado= Math.tan(this.actual);
       else
       this.almacenado= Math.atan(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    exp(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        this.almacenado= Math.exp(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    exp10(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        this.almacenado= 10**(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    log10(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        this.almacenado= Math.log10(this.almacenado);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    log(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        this.almacenado= Math.log(this.almacenado);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    square(){
        this.actual = Number(document.getElementsByName('output')[0].value);
        this.almacenado= Math.pow(this.almacenado,2);
        document.getElementsByName('output')[0].value= this.almacenado;
    }
    pi(){
        this.add(Math.PI);
    }
    toggle(){
        this.toggled= !this.toggled;
    }
    elevar(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado= Number(eval(this.almacenado))**Number(this.actual);
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }
    factorial(){
        this.actual =  document.getElementsByName('output')[0].value;
        this.almacenado=Math.fact(Number((this.actual))) ;
        document.getElementsByName('output')[0].value= this.almacenado;
        this.seHaHechoUnaOperacion = true;
    }


}

calculadora = new CalculadoraCientifica();
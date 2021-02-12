const usedColor2 = 'rgb(33, 243, 54)';
const range2 = document.getElementById('Duração');
const currentValue2 = ((range2.value - range2.min) / (range2.max - range2.min)) * range2.max;
let Video = document.getElementById('Video');
let PP = document.getElementById('PlayPause');
let AD = document.getElementById('AumentarDiminuir');
let Au = document.getElementById('Audio');
let Vol = document.getElementById('Volume');
let AuCon = document.getElementById('AudioConfig');
let Contro = document.getElementById('Controles');
let TempoA = document.getElementById('TempoA');
var Intervalo;
var timeout;

range2.addEventListener('ratechange', function(){'foi'});
Video.addEventListener('ended', teste);
Video.addEventListener('playing', teste);
Video.addEventListener('click', PlayPause);

PP.style.width = '50px';


function teste(a)
{
    if(a.type == 'playing')
    {
        Intervalo = setInterval(function(){
            range2.value = Video.currentTime + 0.001;
            
            const updatedValue2 = (((range2.value - range2.min) / (range2.max - range2.min)) * range2.max) * 100/range2.max;
            updateBackgroundColor2(updatedValue2, usedColor2);
            TempoA.innerText = Math.floor(Video.currentTime) + 's - ' + Math.floor(Video.duration) + 's';
            
            //Setar css
            if(window.innerWidth > 800)
            {
                TempoA.style.left = 'calc(50% - ' + TempoA.clientWidth/2 + 'px)';
            }
        }, 1);
    }
    else
    {
        clearInterval(Intervalo);
    }
}

function Acabou2()
{
    clearInterval(Intervalo);
}

const usedColor = 'rgb(196, 163, 255)';
const range = document.getElementById('Volume');
const currentValue = ((range.value - range.min) / (range.max - range.min)) * range.max;

const updateBackgroundColor = (value, color) => {
    range.style.setProperty(
      'background',
      `linear-gradient(to right,  ${color} 0%,  ${color} 
       ${value}%,
       #fff ${value}%, 
       #fff 100%)`,
    );
  };

  updateBackgroundColor(currentValue, usedColor);

  range.addEventListener('input', function () {
    const updatedValue =
      ((this.value - this.min) / (this.max - this.min)) * this.max;
  

    updateBackgroundColor(updatedValue, usedColor);
  });
  

  
  
  const updateBackgroundColor2 = (value2, color2) => {
      range2.style.setProperty(
        'background',
        `linear-gradient(to right,  ${color2} 0%,  ${color2} 
         ${value2}%,
         #fff ${value2}%, 
         #fff 100%)`,
      );
    };
  
    updateBackgroundColor2(currentValue2, usedColor2);


let c = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;

PP.addEventListener('click', PlayPause);
AD.addEventListener('click', AumentarDiminuir);
Au.addEventListener('click', Mutar);
Au.addEventListener('mouseover', Ani);
Vol.addEventListener('input', MudarV);
AuCon.addEventListener('mouseout', Para);
Video.addEventListener('mousemove', MostrarC);
Contro.addEventListener('mousemove', MostrarC);
Contro.addEventListener('mouseout', Para2);
range2.addEventListener('input', att);

function MostrarC(v)
{
    Contro.style.visibility = 'visible';
    Contro.style.filter = 'opacity(0.9)';
    
    if(window.innerWidth > 800)
    {
        clearTimeout(timeout);
        timeout = setTimeout(function(){EsconderC('MI');}, 1000);
        PP.style.top = '100%';
        AD.style.top = '100%';
        Au.style.top = '100%';
        Video.style.cursor = 'default';
    }
    else
    {
        if(c4 == 0)
        {
            c4 = 1;
            PP.style.filter = 'opacity(1)';
            PP.style.visibility = 'visible';
            Au.style.transform = 'translateY(0)';
            TempoA.style.right = 'calc(' + AD.clientWidth + 'px + ' + '8%)';
        }
        else
        {
            if(v.target.attributes.id.value == 'Controles')
            {
                c4 = 0;
                EsconderC('MI');
            }
        }
    }
}

function EsconderC(v)
{
    setTimeout(function(){
        Contro.style.visibility = 'hidden';
        Contro.style.filter = 'opacity(0)';

        

        if(window.innerWidth > 800)
        {
            PP.style.top = '115%';
            AD.style.top = '115%';
            Au.style.top = '115%';
            Video.style.cursor = 'none';
        }
        else
        {
            PP.style.filter = 'opacity(0)';
            PP.style.visibility = 'hidden';
        }

        if(v == 'MI')
        {
            Video.style.cursor = 'none';
        }
    }, 500);
}


function PlayPause(a)
{
    if(c == 0)
    {
        if(window.innerWidth > 800 && a.toElement.attributes.id.value == 'Video')
        {  
            c = 1;
            PP.style.width = '40px';
            Video.play();
            PP.style.backgroundImage = 'url(Assets/Images/Pause.png)';
        }
        else
        {   
            if(a.toElement.attributes.id.value == 'Video')
            {
                PP.style.width = '35px';
                PP.style.height = '45px';
                PP.style.top = 'calc(50% - ' + PP.clientHeight/2 + 'px)';
                PP.style.left = 'calc(50% - ' + PP.clientWidth/2 + 'px)';
                PP.style.transform = 'translateY(0)';
            }
            else
            {
                c = 1;
                Video.play();
                PP.style.backgroundImage = 'url(Assets/Images/Pause.png)';
            }
        }
        
    }
    else
    {
        c = 0;
        if(window.innerWidth > 800 && a.toElement.attributes.id.value == 'Video')
        {
            c = 0;
            PP.style.width = '50px';
            Video.pause();
            PP.style.backgroundImage = 'url(Assets/Images/Play1.png)';
        }
        else
        {   
            if(a.toElement.attributes.id.value == 'Video')
            {
                PP.style.width = '43px';
                PP.style.height = '45px';
                PP.style.top = 'calc(50% - ' + PP.clientHeight/2 + 'px)';
                PP.style.left = 'calc(50% - ' + PP.clientWidth/2 + 'px)';
                PP.style.transform = 'translateY(0)';
            }
            else
            {
                c = 0;
                Video.pause();
                PP.style.backgroundImage = 'url(Assets/Images/Play1.png)';
            }
        }
    }
}

function AumentarDiminuir()
{
    if(c1 == 0)
    {
        if(window.innerWidth < 800)
        {
            Contro.style.objectFit = 'contain';
            Contro.style.position = 'fixed';
            Contro.style.inset = '0px';
            Contro.style.height = '100%';
    
            Video.style.objectFit = 'contain';
            Video.style.position = 'fixed';
            Video.style.inset = '0px';
            Video.style.height = '100%';
    
            TempoA.style.top = '87.7%';
            AD.style.top = '88.7%';
            range2.style.top = '85%';
            document.getElementById('Audio').style.top = '88.7%';
            document.getElementById('Audio1').style.top = '90%';
            document.getElementById('Audio2').style.top = '89.3%';
            document.getElementById('Audio3').style.top = '89%';
            document.getElementById('Volume').style.top = '90.95%';
    
            document.documentElement.requestFullscreen();    
        }
        else
        { 
            Contro.style.objectFit = 'contain';
            Contro.style.position = 'fixed';
            Contro.style.inset = '0px';
            Contro.style.height = '100%';

            Video.style.objectFit = 'contain';
            Video.style.position = 'fixed';
            Video.style.inset = '0px';
            Video.style.height = '100%';

            document.getElementById('Audio1').style.top = '91.4%';
            document.getElementById('Audio2').style.top = '90.7%';
            document.getElementById('Audio3').style.top = '90%';
            document.getElementById('Volume').style.top = '92.95%';

            document.documentElement.requestFullscreen();

        }
        c1 = 1;

        AD.style.backgroundImage = 'url(Assets/Images/Diminuir.png)';
    }
    else
    {
        if(window.innerWidth > 800)
        {
            Contro.style.objectFit = 'initial';
            Contro.style.position = 'initial';
            Contro.style.inset = 'initial';
            Contro.style.height = '537px';

            Video.style.objectFit = 'initial';
            Video.style.position = 'absolute';
            Video.style.inset = 'initial';
            Video.style.height = '537px';

            document.getElementById('Audio1').style.top = '87.5%';
            document.getElementById('Audio2').style.top = '86.8%';
            document.getElementById('Audio3').style.top = '86.1%';
            document.getElementById('Volume').style.top = '89.45%';

            document.exitFullscreen();
        }
        else
        {
            Video.style.objectFit = 'initial';
            Video.style.position = 'absolute';
            Video.style.inset = 'initial';
            Video.style.width = '100%';
            Video.style.height = 'auto';

            Contro.style.objectFit = 'initial';
            Contro.style.position = 'initial';
            Contro.style.inset = 'initial';
            Contro.style.width = '100%';
            Contro.style.height = Video.clientHeight + 'px';

            TempoA.style.top = '84.8%';
            AD.style.top = '86.4%';
            range2.style.top = '80%';
            document.getElementById('Audio').style.top = '86.5%';
            document.getElementById('Audio1').style.top = '88.5%';
            document.getElementById('Audio2').style.top = '87.8%';
            document.getElementById('Audio3').style.top = '87.1%';
            document.getElementById('Volume').style.top = '90.5%';

            document.exitFullscreen();
        }
        c1 = 0;

        AD.style.backgroundImage = 'url(Assets/Images/Aumentar.png)';
    }
}

function Mutar()
{
    if(window.innerWidth > 800)
    {
        if(c2 == 0)
        {
            Video.muted = true;
            c2 = 1;

            Au.style.backgroundImage = 'url(Assets/Images/AudioM.png)';
        }
        else
        {
            Video.muted = false;
            c2 = 0;

            Au.style.backgroundImage = 'url(Assets/Images/AudioR.png)';
        }
    }
    else
    {
        if(c3 == 0)
        {
            c3 = 1;
            Ani();
        }
        else
        {
            c3 = 0;
            AniVoltar();
        }
    }
}

function Para()
{
    setTimeout(function(){if (AuCon.matches(':hover')){} else{AniVoltar()}},500);
}

function Ani()
{
    if(window.innerWidth > 800)
    {
        Vol.style.visibility = 'visible';
        Vol.style.filter = 'opacity(1)';

        document.getElementById('Audio1').style.visibility = 'visible';
        document.getElementById('Audio1').style.left = 'calc((5% + 40px) + (48px + 1.4%))';

        document.getElementById('Audio2').style.visibility = 'visible';
        document.getElementById('Audio2').style.left = 'calc((5% + 40px) + (48px + 1.4%) + (6px + 2px))';

        document.getElementById('Audio3').style.visibility = 'visible';
        document.getElementById('Audio3').style.left = 'calc((5% + 40px) + (48px + 1.4%) + (6px + 2px) + (6px + 2px))';
    }
    else
    {
        Vol.style.visibility = 'visible';
        Vol.style.filter = 'opacity(1)';
        Vol.style.left = '16.5%'

        document.getElementById('Audio1').style.visibility = 'visible';
        document.getElementById('Audio1').style.left = '11%';
        
        document.getElementById('Audio2').style.visibility = 'visible';
        document.getElementById('Audio2').style.left = '12.5%';
        
        document.getElementById('Audio3').style.visibility = 'visible';
        document.getElementById('Audio3').style.left = '14%';
    }
}

function AniVoltar()
{
    if(window.innerWidth > 800)
    {
        setTimeout(function (){
            document.getElementById('Audio1').style.visibility = 'hidden';
            document.getElementById('Audio2').style.visibility = 'hidden';
            document.getElementById('Audio3').style.visibility = 'hidden';}, 50);

        setTimeout(function(){Vol.style.visibility = 'hidden';Vol.style.filter = 'opacity(0)';}, 50);

        document.getElementById('Audio1').style.left = ' calc((5% + 40px) + (1.4% + 5px))';
        document.getElementById('Audio2').style.left = 'calc((5% + 40px) + (10px + 1.4%))';
        document.getElementById('Audio3').style.left = 'calc((5% + 40px) + (15px + 1.4%))';
    }
    else
    {
        setTimeout(function (){
            document.getElementById('Audio1').style.visibility = 'hidden';
            document.getElementById('Audio2').style.visibility = 'hidden';
            document.getElementById('Audio3').style.visibility = 'hidden';}, 50);

        setTimeout(function(){Vol.style.visibility = 'hidden';Vol.style.filter = 'opacity(0)';}, 50);

        document.getElementById('Audio1').style.left = '5%';
        document.getElementById('Audio2').style.left = '4.9%';
        document.getElementById('Audio3').style.left = '4.8%';
    }
}

function MudarV()
{
    Video.volume = (Vol.value * 0.01);
}



function Para2()
{
    setTimeout(function(){if (document.getElementById('Box').matches(':hover')){} else{EsconderC()}},500);
}


let Verificação = setInterval(Oi, 100);

function Oi()
{
    if(Video.readyState >= 3)
    {
        range2.setAttribute('max', Video.duration);
        clearInterval(Verificação);
    }
}

function att()
{
    Video.currentTime = range2.value;

    const updatedValue2 = (((this.value - this.min) / (this.max - this.min)) * this.max) * 100/this.max;
    updateBackgroundColor2(updatedValue2, usedColor2);

    TempoA.innerText = Math.floor(Video.currentTime) + 's - ' + Math.floor(Video.duration) + 's';
    //Setar css

    if(window.innerWidth > 800)
    {
        TempoA.style.left = 'calc(50% - ' + TempoA.clientWidth/2 + 'px)';
    }
}

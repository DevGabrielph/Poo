let produto = document.querySelector('#produto')
let preço = document.querySelector('#preço')
let numeraçao= 1

let arrayProdutos=[]


function salvarProduto(){
    
   
    if(produto.value===''||  preço.value===''){
        alert('- Preencha os campos (Produto) e (Preço)  ')
      
    }else{
        let objProduto={
            idProduto:numeraçao++,
            nomeProduto:produto.value,
            preçoProduto:'R$  ' + preço.value,
            
        }

        arrayProdutos.push(objProduto)

        escreverlista()



        
        }

        cancelarLimpar()
}

function escreverlista(){

    let tbody= document.querySelector('.lista')

    tbody.innerHTML=''

    arrayProdutos.map(item=>{
        let idP=document.createTextNode(item.idProduto)
        let nomeP=document.createTextNode(item.nomeProduto)
        let preçoP=document.createTextNode(item.preçoProduto)
        let açoesP=document.createTextNode(item.açoesProduto)
        //criando variavel para cada elemento do array


        let linha = document.createElement('tr')
        //criando tr

        let coluna1=document.createElement('td')
        let coluna2=document.createElement('td')
        let coluna3=document.createElement('td')
        let coluna4=document.createElement('td')
        //criando td
        
        tbody.appendChild(linha)
        //inserindo linha(tr) dentro de tbody

        linha.appendChild(coluna1)
        linha.appendChild(coluna2)
        linha.appendChild(coluna3)
        linha.appendChild(coluna4)
        // inserindo as colunas(td) dentro da linha(tr)

        coluna1.appendChild(idP)
        coluna2.appendChild(nomeP)
        coluna3.appendChild(preçoP)
        //inserinho dados da array nas colunas(td)
        let posicaoArray= arrayProdutos.indexOf(item)
        console.log(posicaoArray)

        let posicaoId=arrayProdutos.idProduto

        let imgEdit=document.createElement('img')
        let imgDelete=document.createElement('img')
        //criando imagems

        imgEdit.src='imagens/edit.png'
        imgDelete.src='imagens/delete.png'
        //inserindo imagem dentro do elemento img

        imgEdit.setAttribute('onclick',`editar(${posicaoArray})`)

        imgDelete.setAttribute('onclick',`deletarItem(${posicaoArray})`)

        coluna4.appendChild(imgEdit)
        coluna4.appendChild(imgDelete)



        numero()
        
     
     

    })


}


function cancelarLimpar(){
    document.querySelector('#produto').value=''
        document.querySelector('#preço').value=''

}

function editar(posicaoArray){
    alert('3')
}


function deletarItem(posicaoArray){

    
   // if(confirm('Deseja realmente apagar este item '+ (posicaoArray+1))){
    arrayProdutos.splice(posicaoArray,1)
    escreverlista()
   // }
}
function numero(){
    
}
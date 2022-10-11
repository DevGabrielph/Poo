class Produto{

    constructor(){
        this.id = 1
        this.arrayProdutos=[]
      
    }

    salvar(){
        let produto = this.lerDados()
        
        
        if(this.validaCampos(produto)){
           this.adicionar(produto)
        }
        this.criandoTabela()
            
        

    }
    
    criandoTabela(){
        let tbody=document.querySelector('.lista')

        tbody.innerHTML=''
        
        this.arrayProdutos.forEach(item=>{
           let pid=document.createTextNode(item.id)
           let pro=document.createTextNode(item.nomeProduto)
           let pre=document.createTextNode(item.preço)
           //variavel de cada elemento dentro do array

           let tr=document.createElement('tr')
           //criando o tr

           let td_id=document.createElement('td')
           let td_produto=document.createElement('td')
           let td_preço=document.createElement('td')
           let td_açoes=document.createElement('td')
           //criando o td

           tbody.appendChild(tr)
           //inserindo o tr dentro do tbody 

           tr.appendChild(td_id)
           tr.appendChild(td_produto)
           tr.appendChild(td_preço)
           tr.appendChild(td_açoes)
           //inserinho td dentro do tr

           td_id.appendChild(pid)
           td_produto.appendChild(pro)
           td_preço.appendChild(pre)
           //inserindo o elemento do array ao seu lugar de destino
           
           
           td_id.classList.add('center')
           td_açoes.classList.add('center')
           //inserindo class ao elementos id e ações(intuito de centralizar com css)

           let posiçao=this.arrayProdutos.indexOf(item)

           let imgEdit=document.createElement('img')
           let imgDelete=document.createElement('img')

           

           //criando imagem

           imgEdit.src='imagens/edit.png'
           imgDelete.src='imagens/delete.png'
           //inserindo imagem dentro da variavel
           imgEdit.setAttribute('onclick','produto.editar()')
           imgDelete.setAttribute("onclick",`produto.deletar(${posiçao})`)
           //inserindo atrinutos a variavel(imagem)

           td_açoes.appendChild(imgEdit)
           td_açoes.appendChild(imgDelete)
           //<td><img></td--inserindo variavel que guarda a imagem dentro da td_ações

           
           

           this.cancelar()


           console.log(pid)
           console.log(posiçao)
        })
    }
    

    adicionar(produto){
        this.arrayProdutos.push(produto)
        this.id++

    }

    lerDados(){
        let produto = {}

        produto.id = this.id
        produto.nomeProduto = document.querySelector('#produto').value
        produto.preço  =document.querySelector('#preço').value

        return produto
    }

    validaCampos(produto){
        let msg=''

        if(produto.nomeProduto == ''){
            msg+= '- Informe o nome do produto \n'

        }
        if(produto.preço == ''){
            msg+= '- Informe o preço do produto \n'

        }
        if(msg!=''){
            alert(msg)
            return false
        }

        return true

    }

    cancelar(){
        document.querySelector('#produto').value=''
        document.querySelector('#preço').value=''

    }
    deletar(posiçao){

        this.arrayProdutos.splice(posiçao,1)
        this.criandoTabela()
        console.log(posiçao)
    }

    editar(){
        alert('editar')
    }

}
var produto = new Produto()
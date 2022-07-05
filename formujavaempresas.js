function validar() {
          var nome = document.getElementById("nome");
          var email = document.getElementById("email");
          var telefone = document.getElementById("telefone");
          var newsletter = document.getElementById("newsletter").checked;

          // verificar se o nome está vazio
          if (nome.value == "") {
            alert("Nome não informado");

            // Deixa o input com o focus
            nome.focus();
            // retorna a função e não olha as outras linhas
            return;
          }
          if (sobrenome.value == "") {
            alert("Sobrenome não informado");
            sobrenome.focus();
            return;
          }
          if (email.value == "") {
            alert("E-mail não informado");
            email.focus();
            return;
          }
          
          if (telefone.value == "") {
            alert("Telefone não informado");
            telefone.focus();
            return;
          }
          if (categoria.value == "") {
            alert("Categoria não informada");
            categoria.focus();
            return;
          }
          if (bairro.value == "") {
            alert("Bairro não informado");
            bairro.focus();
            return;
          }
          alert("Cadastro concluído!");
          // envia o formulário
          //formulario.submit();
        }
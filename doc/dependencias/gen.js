function substituirPalavrasChave() {
    const cpValue = document.getElementById("cpInput").value; // CPF
    const enderecoValue = document.getElementById("rua").value; // Rua
    const NAME_1Value = document.getElementById("NAME_1Input").value; // Nome
    const END_1Value = document.getElementById("uf").value; // Estado
    const CE_1Value = document.getElementById("CE_1Input").value; // CEP
    const CI_1Value = document.getElementById("cidade").value; // Cidade
    const LIST_1Value = document.getElementById("LIST_1Input").value; // lista 1
    const LIST_2Value = document.getElementById("LIST_2Input").value; // lista 2
    const METRO_1Value = document.getElementById("METRO_1Input").value; // Cabo M
    const BAR_Value = document.getElementById("bairro").value; //bairro
    
    const VALOR_1Value = document.getElementById("valor").value; // Valor 
    const PAGAMENTO_1Value = document.getElementById("pagamento").value; // Pagamento
    const CNPJ_1Value = document.getElementById("cnpj").value; // CNPJ da empresa
    const Potencia_1Value = document.getElementById("potencia").value; // Potência
    const Empresa_1Value = document.getElementById("empresa").value; // Empresa
    
    const today = new Date();// DATA E FORMATAÇÃO
    const day = today.getDate();
    const year = today.getFullYear();
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const month = monthNames[today.getMonth()];

    fetch("dependencias/conclusão.html")
        .then(response => response.text())
        .then(html => {
            const htmlComSubstituicoes = html
                .replace(/CP_1/g, cpValue)
                .replace(/END_1/g, enderecoValue + " - " + BAR_Value)
                .replace(/CE_1/g, CE_1Value)
                .replace(/ES_1/g, END_1Value)
                .replace(/NAME_1/g, NAME_1Value)
                .replace(/NAME_2/g, NAME_1Value)
                .replace(/CI_1/g, CI_1Value)
                .replace(/DT_1/g, day)
                .replace(/MT_1/g, month)
                .replace(/AT_1/g, year)
                .replace(/LIST_1/g, LIST_1Value)
                .replace(/LIST_2/g, LIST_2Value)
                .replace(/METRO_1/g, METRO_1Value + "M")
                .replace(/VALOR_1/g, "R$" + VALOR_1Value)
                .replace(/PAGAMENTO_1/g, PAGAMENTO_1Value)
                .replace(/CNPJ_1/g, CNPJ_1Value)
                .replace(/Potencia_1/g, Potencia_1Value + "Kwp")
                .replace(/Empresa_1/g, Empresa_1Value)

            // Cria um blob com o conteúdo modificado
            const blob = new Blob([htmlComSubstituicoes], {
                type: "text/html"
            });

            // Cria uma URL temporária para o blob
            const url = URL.createObjectURL(blob);

            // Cria um link de download
            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = NAME_1Value, ".html";
            downloadLink.textContent = "Baixar Arquivo Modificado";

            // Adiciona o link à página
            const guiContainer = document.getElementById("guiContainer");
            guiContainer.innerHTML = "";
            guiContainer.appendChild(downloadLink);

            downloadLink.style.fontSize = "25px";
            downloadLink.style.display = "flex";
            downloadLink.style.marginTop = "20px";
            downloadLink.style.marginLeft = "-2px";
            downloadLink.style.textDecoration = "none";
            downloadLink.style.backgroundColor = "#007bff";
            downloadLink.style.color = "#fff";
            downloadLink.style.padding = "10px 20px";
            downloadLink.style.border = "none";
            downloadLink.style.borderRadius = "8px";
            downloadLink.style.fontWeight = "bold";
            downloadLink.style.cursor = "pointer";
            downloadLink.style.transition = "background-color 0.3s ease";

            // Add hover effect
            downloadLink.addEventListener("mouseover", () => {
                downloadLink.style.backgroundColor = "#0056b3";
            });

            downloadLink.addEventListener("mouseout", () => {
                downloadLink.style.backgroundColor = "#007bff";
            });
        })
        .catch(error => {
            console.error("Erro ao carregar o arquivo Gui.html:", error);
        });
}
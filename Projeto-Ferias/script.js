// 1. ALERTA DE BOAS-VINDAS quando abre a página
window.addEventListener('load', () => {
    alert("Bem-vindo ao Projeto-Ferias!");
});

// 2. BOTÃO "VOLTAR AO TOPO"
document.getElementById('btnTopo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. MODO ESCURO / CLARO
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnTema.textContent = document.body.classList.contains('dark-mode') ? '☀️ Tema' : '🌙 Tema';
});

// 4. VALIDAÇÃO DO FORMULÁRIO
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // não recarrega a página
    alert("Mensagem enviada com sucesso!");
    e.target.reset(); // limpa o form
});

// 5. DATA ATUAL NO RODAPÉ
const ano = new Date().getFullYear();
document.getElementById('ano').textContent = ano;

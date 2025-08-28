function updateSummaries() {
  const totalIncome = incomes.reduce((a, b) => a + b, 0);
  const totalExpense = expenses.reduce((a, b) => a + b, 0);

  // Regra 50/30/20
  const needs = totalIncome * 0.5;
  const wants = totalIncome * 0.3;
  const savings = totalIncome * 0.2;

  document.getElementById("rule-summary").innerHTML = `
    <p>Necessidades (50%): R$ ${needs.toFixed(2)}</p>
    <p>Desejos (30%): R$ ${wants.toFixed(2)}</p>
    <p>Poupança (20%): R$ ${savings.toFixed(2)}</p>
  `;

  // Resumo Real
  const needsReal = totalExpense <= needs ? "✅ Dentro do limite" : "❌ Acima do limite";
  const wantsReal = totalExpense <= wants ? "✅ Dentro do limite" : "❌ Acima do limite";
  const savingsReal = (totalIncome - totalExpense) >= savings ? "✅ Poupança ok" : "❌ Poupança insuficiente";

  document.getElementById("real-summary").innerHTML = `
    <p>Total Receita: R$ ${totalIncome.toFixed(2)}</p>
    <p>Total Despesa: R$ ${totalExpense.toFixed(2)}</p>
    <p>Status Necessidades: ${needsReal}</p>
    <p>Status Desejos: ${wantsReal}</p>
    <p>Status Poupança: ${savingsReal}</p>
  `;
}

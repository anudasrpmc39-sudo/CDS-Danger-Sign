// Tab switching
const maternalTab = document.getElementById("maternalTab");
const newbornTab = document.getElementById("newbornTab");
const maternalForm = document.getElementById("maternalForm");
const newbornForm = document.getElementById("newbornForm");

maternalTab.onclick = () => {
  maternalTab.classList.add("active");
  newbornTab.classList.remove("active");
  maternalForm.classList.add("active");
  newbornForm.classList.remove("active");
};

newbornTab.onclick = () => {
  newbornTab.classList.add("active");
  maternalTab.classList.remove("active");
  newbornForm.classList.add("active");
  maternalForm.classList.remove("active");
};

// Utility
function getChecked(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll("input[type=checkbox]");
  let selected = [];
  inputs.forEach(i => {
    if (i.checked) selected.push(i.name);
  });
  return selected;
}

function showResult(flags) {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  if (flags.length > 0) {
    resultDiv.className = "result danger";
    resultDiv.innerHTML = `
      <strong>DANGER – URGENT REFERRAL REQUIRED</strong><br><br>
      Reasons:<br> - ${flags.join("<br> - ")}
    `;
  } else {
    resultDiv.className = "result safe";
    resultDiv.innerHTML = `
      <strong>STABLE – Routine care</strong>
    `;
  }
}

// Maternal logic
function assessMaternal() {
  const selected = getChecked("maternalForm");
  showResult(selected);
}

// Newborn logic
function assessNewborn() {
  const selected = getChecked("newbornForm");
  showResult(selected);
}

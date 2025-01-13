function putStatus(id, status) {
  console.log(id);
  $.ajax({
    url: `/dataTables/updateEstadoT/${id}`,
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ estadot: status }),
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.error(error);
    },
  });
}

function deleteData(id){
    console.log(id);
    $.ajax({
        url: `/dataTables/deleteDataTable/${id}`,
        type: "DELETE",
        contentType: "application/json",
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.error(error);
        },
    });
}
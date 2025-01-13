
let data = [];
const listData = () => {
    $.ajax({
      url: "/dataTables/dataTables",
      type: "GET",
      contentType: "application/json",
      async: true,
      success: (info) => {
        info.sort((a, b) => new Date(b.horacreado) - new Date(a.horacreado));
        data = info;
      },
      error: (error) => {
        console.error(error);
      },
    });
  };
listData()
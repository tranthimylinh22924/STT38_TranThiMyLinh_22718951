$(document).ready(function () {
  var i = 2;
  $("#btnDK").click(function () {
    $("#myModal").modal("show");
  });

  function kiemTraMa() {
    var mauKT = /^([0-9]{9})$/;
    var maValue = $("#txtMa").val();
    if (maValue == "") {
      $("#tbMa").html("Bắt buộc");
      $("#tbMa").addClass("mauDo").removeClass("mauXanh");
      return false;
    } else if (!mauKT.test(maValue)) {
      $("#tbMa").html("Mã nhân viên có 9 chữ số");
      $("#tbMa").addClass("mauDo").removeClass("mauXanh");
      return false;
    } else {
      $("#tbMa").html("");
      $("#tbMa").addClass("mauXanh").removeClass("mauDo");
      return true;
    }
  }

  function kiemTraHT() {
    var regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    var ten = $("#txtHT").val();
    if (ten == "") {
      $("#tbTen").html("Bắt buộc");
      $("#tbTen").addClass("mauDo").removeClass("mauXanh");
      return false;
    } else if (!regex.test(ten)) {
      $("#tbTen").html("Tên nhân viên viết hoa chữ đầu");
      $("#tbTen").addClass("mauDo").removeClass("mauXanh");
      return false;
    } else {
      $("#tbTen").html("");
      $("#tbTen").addClass("mauXanh").removeClass("mauDo");
    }
    return true;
  }

  $("#txtNgay").on("blur", function () {
    const ngayThamGia = new Date($(this).val());
    if (!$(this).val()) {
      $("#tbNgay").text("Bắt buộc");
      return;
    }
    const ngayHienTai = new Date();
    ngayHienTai.setFullYear(ngayHienTai.getFullYear() - 18);
    if (ngayThamGia > ngayHienTai) {
      $("#tbNgay").text("Ngày tham gia phải trước ngày hiện tại 18 năm");
      $("#tbNgay").addClass("mauDo").removeClass("mauXanh");
    } else {
      $("#tbNgay").text("");
      $("#tbNgay").addClass("mauXanh").removeClass("mauDo");
    }
  });

  $("#txtMa").blur(kiemTraMa);
  $("#txtHT").blur(kiemTraHT);

  $("#luong").change(function () {
    $("#luong option:selected").each(function () {
      $("#heso").val($(this).val());
    });
  });

  $("#btnSave").click(function () {
    var maNV = $("#txtMa").val();
    var tenNV = $("#txtHT").val();
    var ngayVaoCty = $("#txtNgay").val();
    var chucVu = $("#chucvu:checked").val();
    var heSo = $("#heso").val();
    var html = `<tr>
                    <td>${i++}</td>
                    <td>${maNV}</td>
                    <td>${tenNV}</td>
                    <td>${ngayVaoCty}</td>
                    <td>${chucVu}</td>
                    <td>${heSo}</td>
                </tr>`;
    $("#tbDanhSach").append(html);
    $("#myModal").modal("hide");
  });
});

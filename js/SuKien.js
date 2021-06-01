// JavaScript Document

	$(document).ready(function() {
		var tenDN="";
		var tenDNMacDinh = "admin1234";
		var passDNMacDinh = "admin1234";
		var tenDN = "";
		var hoten ="";
		var matKhau="";
		var STT=1;
		var STT_MH=5;
		var dataListSV = new Array();
		var dataListTaiKhoan = new Array();
		var dataListMHoc = new Array();
		var dataListMHocDaDki = new Array();
		    $("#nhapDiem").hide();
			$("#xemThongTin").hide()
			$("#LopHocPhanMo").hide();
			$("#nhapMonHoc").hide();
			$("#dangKyMH").hide();
			$("#LichHoc").hide();
        $("#home_menu").click(function() {
		    $("#nhapDiem").hide();
			$("#xemThongTin").hide()
			$("#LopHocPhanMo").hide();
			$("#nhapMonHoc").hide();
			$("#dangKyMH").hide();
			$("#LichHoc").hide();
			$("#thongBao").slideDown("slow");
			$("#hoatDong").slideDown("slow");
        });
		$("#nhap_diem").click(function() {	
			if(tenDN!=""){
				$("#nhapDiem").slideToggle("slow");
				$("#xemThongTin").slideToggle("slow");;
				$("#chiTietSV").html("Sinh Viên Đã Nhập Điểm");
				$("#LopHocPhanMo").hide();
				$("#nhapMonHoc").hide();
				$("#thongBao").hide();
				$("#hoatDong").hide();
				$("#dangKyMH").hide();
				$("#LichHoc").hide();
			}
			else
				alert("Vui Lòng Đăng Nhập Để Thực Hiện Chức Năng Này!");
        });
		$("#xem_diem").click(function() {
			if(tenDN!=""){
				$("#nhapDiem").hide();
				$("#xemThongTin").slideToggle("slow");
				$("#chiTietSV").html("Thông Tin Sinh Viên");
				$("#LopHocPhanMo").hide();
				$("#thongBao").hide();
				$("#hoatDong").hide();
				$("#dangKyMH").hide();
				$("#nhapMonHoc").hide();
				$("#LichHoc").hide();
			}
			else
				alert("Vui Lòng Đăng Nhập Để Thực Hiện Chức Năng Này!");
        });
		$("#dang_ky").click(function() {
			if(tenDN!=""){
				$("#nhapDiem").hide();
				$("#xemThongTin").hide();
				$("#nhapMonHoc").hide();
				$("#thongBao").hide();
				$("#hoatDong").hide();
				$("#LichHoc").hide();
				$("#LopHocPhanMo").hide();
				$("#dangKyMH").slideToggle("slow");
				STT_MH++;
				for(i=0;i<=dataListMHoc.length;i++){
					$("#dataListMHDM").append(
						"<tr>"+
							"<td>"+STT_MH+"</td>"+  
							"<td>"+dataListMHoc[i].maHP+"</td>"+
							"<td>"+dataListMHoc[i].tenMH+"</td>"+
							"<td>"+dataListMHoc[i].sTC+"</td>"+
							"<td>"+dataListMHoc[i].tietHoc+"</td>"+
							"<td>"+dataListMHoc[i].phongHoc+"</td>"+
						"</tr>");
				}
				
			}
			else
				alert("Vui Lòng Đăng Nhập Để Thực Hiện Chức Năng Này!");
        });
		$("#mo_lop").click(function() {
			if(tenDN!=""){
				$("#nhapMonHoc").slideToggle("slow");
				$("#LopHocPhanMo").slideToggle("slow");
				$("#nhapDiem").hide();
				$("#xemThongTin").hide();
				$("#thongBao").hide();
				$("#hoatDong").hide();
				$("#dangKyMH").hide();
				$("#LichHoc").hide();
			}
			else
				alert("Vui Lòng Đăng Nhập Để Thực Hiện Chức Năng Này!");	
        });
		$("#xem_lichhoc").click(function() {
			if(tenDN!=""){
				$("#nhapMonHoc").hide();
				$("#LopHocPhanMo").hide();
				$("#nhapDiem").hide();
				$("#xemThongTin").hide();
				$("#thongBao").hide();
				$("#hoatDong").hide();
				$("#dangKyMH").hide();
				$("#LichHoc").slideToggle("slow");
				STT_MH++;
				for(i=0;i<=dataListMHocDaDki.length;i++){
					$("#dataListLichHoc").append(
						"<tr>"+
							"<td>"+STT_MH+"</td>"+  
							"<td>"+dataListMHocDaDki[i].maHP+"</td>"+
							"<td>"+dataListMHocDaDki[i].tenMH+"</td>"+
							"<td>"+dataListMHocDaDki[i].sTC+"</td>"+
							"<td>"+dataListMHocDaDki[i].tietHoc+"</td>"+
							"<td>"+dataListMHocDaDki[i].phongHoc+"</td>"+
							
						"</tr>");
				}
				
			}
			else
				alert("Vui Lòng Đăng Nhập Để Thực Hiện Chức Năng Này!");
        });
		$("#dang_nhap").click(function() {
            $("#myModal").modal();
        });
		$("#dang_kyTK").click(function() {
            $("#myModalDK").modal();
        });

	function KiemTraTenDNDK(){
			 tenDN = $("#txtTenDNDK").val();
			 hoten = $("#txtHoTenDK").val();
			 matKhau =$("#txtMatKhauDK").val();
			 xnMatKhau =$("#txtXNMatKhau").val();
			
			var reTenDN = /^[a-zA-Z0-9 ]{8,}$/;
			var reHoten= /^[a-zA-z ]{4,}$/;
			var reMatKhau =/^[a-zA-Z0-9 ]{8,}$/;
			if(!reTenDN.test(tenDN)){
				$("#tbTenDNDK").html("Tên Đăng Nhập Phải Là Kí Tự, Không Chứa Kí Tự Đặt Biệt Và Phải Ít Nhất 8 Kí Tự");
				return false;
			}

			$("#tbTenDNDK").html("* ");
			if(!reHoten.test(hoten)){
				$("#tbTenDK").html("Họ Và Tên Phải Là Chữ Và Ít Nhất 4 Chữ");
				return false;
			}
			$("#tbTenDK").html("* ");
			if(!reMatKhau.test(matKhau)){
				$("#tbMatKhauDK").html("Mật Khẩu Là Kí Tự,Không Chứa Kí Tự Đặt Biệt Và Ít Nhất 8 Kí Tự");
				return false;
			}
			$("#tbMatKhauDK").html("* ");
			
			if(matKhau!=xnMatKhau){
				$("#tbMKXN").html("Vui Lòng Nhập Đúng Mật Khẩu Bên Trên.");
				return false;
			}
			if(!reMatKhau.test(xnMatKhau)){
				$("#tbMKXN").html("Mật Khẩu Là Kí Tự,Không Chứa Kí Tự Đặt Biệt Và Ít Nhất 8 Kí Tự");
				return false;
			}
			$("#tbMKXN").html("* ");
			return true;
		}
		$("#txtTenDNDK").blur(KiemTraTenDNDK);
		$("#txtHoTenDK").blur(KiemTraTenDNDK);
		$("#txtMatKhauDK").blur(KiemTraTenDNDK);
		$("#txtXNMatKhau").blur(KiemTraTenDNDK);
		
		$("#btnDKi").click(function() {
			if(KiemTraTenDNDK()){
            	dataListTaiKhoan[dataListTaiKhoan.length]={
					"TaiKhoan":tenDN,
					"HoTen":hoten,
					"MatKhau":matKhau
				};
				alert("Đăng Ký Thành Công!");
				$("#myModalDK").modal("hide");
				 $("#dang_nhap").html(tenDN);
			}
			else
				alert("Vui Lòng Kiểm Tra Lại Thông Tin Đã Nhập!");
        });
	function KiemTraTenDN(){
			var tenDN = $("#txtTenDN").val();
			var re = /^[a-zA-Z0-9]{6,}$/;
			if(tenDN==""){
				$("#tbMaDN").html("* Bắt Buộc Nhập.");
				return false;
			}
			if(!re.test(tenDN)){
				$("#tbMaDN").html("Tên Đăng Nhập Phải Là Kí Tự, Không Chứa Kí Tự Đặt Biệt Và Phải Ít Nhất 6 Kí Tự");
				return false;
			}
			$("#tbMaDN").html("*");
			return true;
		}
		$("#txtTenDN").blur(KiemTraTenDN);
	function KiemTraPassDN(){
		var passDN = $("#txtMatKhauDN").val();
		var re = /^[a-zA-Z0-9 ]{8,}$/;
		if(passDN==""){
			$("#tbMatKhauDN").html("* Bắt Buộc Nhập.");
				return false;
		}
		if(!re.test(passDN)){
			$("#tbMatKhauDN").html("Mật Khẩu Phải Là Kí Tự, Không Chứa Kí Tự Đặt Biệt Và Phải Ít Nhất 8 Kí Tự");
				return false;
		}
		$("#tbMatKhauDN").html("*");
			return true;
		}
		$("#txtMatKhauDN").blur(KiemTraPassDN);	
		
		function KiemTraDangNhap(){
			tenDN = $("#txtTenDN").val();
			var passDN = $("#txtMatKhauDN").val();
			if(tenDN==tenDNMacDinh && passDN==passDNMacDinh && KiemTraPassDN() && KiemTraTenDN() ){
				tenDN=tenDNMacDinh;
				return true;
			}
				return false;
		}	
		function KiemTraDangNhap1(){
			tenDN = $("#txtTenDN").val();
			var passDN = $("#txtMatKhauDN").val();
            for(i=0;i<=dataListTaiKhoan.length-1;i++){
				if(dataListTaiKhoan[i].TaiKhoan==tenDN && dataListTaiKhoan[i].MatKhau==passDN){
					tenDN=dataListTaiKhoan[i].TaiKhoan;
					return true;
				}
			}
			return false;
		}

		$("#btnLogIn").click(function() {
			if(KiemTraDangNhap1() || KiemTraDangNhap()){
				alert("Đăng Nhập Thành Công!");
				$("#myModal").modal("hide");
				 $("#dang_nhap").html(tenDN);
			}
			else{
				alert("Vui Lòng Kiểm Tra Lại Tài Khoản Và Mật Khẩu!");
				alert("Nếu Chưa Có Tài Khoản Vui Lòng Nhấp Vào Phần Đăng Ký!");
			}
        });	
		
		<!--Kiem Tra Cac Du Lieu Cua Thong Tin Sinh Vien Va Diem-->
		function KiemTraDuLieuNhapSV(){
			var reMaSV = /^[0-9]{8}$/;
			var reHoten=/^[a-zA-Z ]{4,}$/;
			var reSDT=/^[0-9]{10,11}$/;
			var reDiemJava = /^[0-9.]+$/;
			var reDiemWeb = /^[0-9.]+$/;
			var maSV = $("#txtmaSV").val();
			var hoTen= $("#tenSV").val();
			
			if(!reMaSV.test(maSV)){
				$("#tbLoiMaSV").html("Mã Sinh Viên Là Số Và Có 8 Số");
				return false;
			}
			$("#tbLoiMaSV").html("*");
			if(!reHoten.test(hoTen)){
				$("#tbLoiHoTenSV").html("Tên Sinh Viên Phải Là Chữ Và Có Ít Nhất 4 Chữ");
				return false;
			}
			$("#tbLoiHoTenSV").html("*");
			if(!reSDT.test($("#txtsoDT").val())){
				$("#tbLoiSDT").html("Số Điện Thoại Phải Là Số Và Có 10 Hoặc 11 Số");
				return false;
			}
			$("#tbLoiSDT").html("*");
			if(!reDiemJava.test($("#txtDiemJava").val())){
				$("#tbLoiDiemJava").html("Điểm Phải Là Số");
				return false;
			}
			$("#tbLoiDiemJava").html("*");
			if(!reDiemWeb.test($("#txtDiemWeb").val())){
				$("#tbLoiDiemWeb").html("Điểm Phải Là Số");
				return false;
			}
			$("#tbLoiDiemWeb").html("*");
			return true;
		}
		$("#txtmaSV").blur(KiemTraDuLieuNhapSV);
		$("#tenSV").blur(KiemTraDuLieuNhapSV);
		$("#txtsoDT").blur(KiemTraDuLieuNhapSV);
		$("#txtDiemJava").blur(KiemTraDuLieuNhapSV);
		$("#txtDiemWeb").blur(KiemTraDuLieuNhapSV);
		
		$("#add_SV").click(function() {
            var maSV = $("#txtmaSV").val();
			var tenSV = $("#tenSV").val();
			var soDT = $("#txtsoDT").val();
			var diemJava = $("#txtDiemJava").val();
			var diemWeb = $("#txtDiemWeb").val();
			if(KiemTraDuLieuNhapSV()){
				STT++;
				dataListSV[dataListSV.length] ={
					"MaSV":maSV,
					"tenSV":tenSV,
					"soDT":soDT,
					"diemJava":diemJava,
					"diemWeb":diemWeb
				};
				$("#dataListDiem").append(
						"<tr>"+
							"<td>"+STT+"</td>"+
							"<td>"+maSV+"</td>"+
							"<td>"+tenSV+"</td>"+
							"<td>"+soDT+"</td>"+
							"<td>"+diemJava+"</td>"+
							"<td>"+diemWeb+"</td>"+
						"</tr>");
			}
        });
		<!--Kiem Tra Cac Du Lieu Cua Nhap Mon Hoc Can Mo Lop-->
		function KiemTraDuLieuNhapMH(){
			var remaHP = /^[0-9]+$/;
			var retenMH = /^[a-zA-Z0-9 ]+$/;
			var resoTC = /^[0-9]$/;
			var retietHoc =/^[a-zA-Z0-9-_. ]+$/;
			var rephongHoc = /^[a-zA-Z0-9-_. ]+$/;
			if(!remaHP.test($("#ma_HP").val())){
				$("#tbLoiMaHP").html("Mã Học Phần Phải Là Số");
				return false;
			}
			$("#tbLoiMaHP").html("*");
			if(!retenMH.test($("#ten_MH").val())){
				$("#tbLoiTenMH").html("Tên Môn Học Không Chứa Ký Tự Đặc Biệt");
				return false;
			}
			$("#tbLoiTenMH").html("*");
			if(!resoTC.test($("#so_TC").val())){
				$("#tbLoiSoTC").html("Số Tín Chỉ Không Được Vượt Quá 9");
				return false;
			}
			$("#tbLoiSoTC").html("*");
			if(!retietHoc.test($("#so_TietHoc").val())){
				$("#tbLoiTietHoc").html("Tiết Học Không Chứa Các Ký Tự Đặc Biệt");
				return false;
			}
			$("#tbLoiTietHoc").html("*");
			if(!rephongHoc.test($("#phong_Hoc").val())){
				$("#tbLoiPhongHoc").html("Phòng Học Không Chứa Các Ký Tự Đặc Biệt");
				return false;
			}
			$("#tbLoiPhongHoc").html("*");
			return true;
		}
		$("#ma_HP").blur(KiemTraDuLieuNhapMH);
		$("#ten_MH").blur(KiemTraDuLieuNhapMH);
		$("#so_TC").blur(KiemTraDuLieuNhapMH);
		$("#so_TietHoc").blur(KiemTraDuLieuNhapMH);
		$("#phong_Hoc").blur(KiemTraDuLieuNhapMH);
		
		$("#add_MH").click(function() {
            var maHP= $("#ma_HP").val();
			var tenMH=$("#ten_MH").val();
			var sTC=$("#so_TC").val();
			var tietHoc=$("#so_TietHoc").val();
			var phongHoc=$("#phong_Hoc").val();
			if(KiemTraDuLieuNhapMH()){
				STT_MH++;
				dataListMHoc[dataListMHoc.length]={
					"maHP":maHP,
					"tenMH":tenMH,
					"sTC":sTC,
					"tietHoc":tietHoc,
					"phongHoc":phongHoc
				};
				
				$("#dataListMH").append(
						"<tr>"+
							"<td>"+STT_MH+"</td>"+
							"<td>"+maHP+"</td>"+
							"<td>"+tenMH+"</td>"+
							"<td>"+sTC+"</td>"+
							"<td>"+tietHoc+"</td>"+
							"<td>"+phongHoc+"</td>"+  
						"</tr>");
			}
        });
		
		var maHPhan="";
		var tenMH="";
		var soTC="";
		var tietHoc="";
		var phongHoc="";
		$("#tb2 tr").click(function() {
			 maHPhan = $(this).find("td").eq(1).html();
			 tenMH = $(this).find("td").eq(2).html();
			 soTC = $(this).find("td").eq(3).html();
			 tietHoc = $(this).find("td").eq(4).html();
			 phongHoc = $(this).find("td").eq(5).html();
        });
		$("#dangKiMH").click(function() {
            dataListMHocDaDki[dataListMHocDaDki.length]={
					"maHP":maHPhan,
					"tenMH":tenMH,
					"sTC":soTC,
					"tietHoc":tietHoc,
					"phongHoc":phongHoc	
			};
				alert("Đã Đăng Kí Thành Công Môn Học Có Mã: "+maHPhan);
          });
		
    });
const slidePage = document.querySelector(".slide-page");
const slideSkema = document.querySelector(".page-skema");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

// mengatur halaman
nextBtnFirst.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	slideSkema.classList.add("visually-hidden");
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-52.5%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	current += 1;
});
prevBtnSec.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "2.5%";
	slideSkema.classList.remove("visually-hidden");
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	current -= 1;
});

// 

var coll = document.getElementsByClassName("collapsible");
var c;

for (c = 0; c < coll.length; c++) {
	coll[c].addEventListener("click", function () {
		this.classList.toggle("active");
		var content = document.querySelector(".content-collapse");
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

// 

const skemaPajak = document.getElementById("skemaPajak");
const pemotonganPegawaiTetap = document.getElementById("pemotonganPegawaiTetap");
const selectPemotonganPegawaiTetap = document.getElementById("selectPemotonganPegawaiTetap");
const pemotonganSetiapMasa = document.getElementById("pemotonganSetiapMasa");
const pemotonganMasaTerakhir = document.getElementById("pemotonganMasaTerakhir");
const pemotonganTidakTetap = document.getElementById("pemotonganTidakTetap");
const selectPemotonganTidakTetap = document.getElementById("selectPemotonganTidakTetap");
const tidakTetapHarian = document.getElementById("tidakTetapHarian");
const tidakTetapBulanan = document.getElementById("tidakTetapBulanan");
const progressBar = document.getElementById("progressBar");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

// mengatur skema pajak
skemaPajak.addEventListener("change", () => {
	progressBar.classList.add("visually-hidden");
	step1.classList.add("visually-hidden");
	step2.classList.add("visually-hidden");
	step3.classList.add("visually-hidden");

	if (skemaPajak.value == "pegawaiTetap") {
		pemotonganPegawaiTetap.classList.remove("visually-hidden");
		pemotonganSetiapMasa.classList.remove("visually-hidden");
		pemotonganTidakTetap.classList.add("visually-hidden");
		tidakTetapHarian.classList.add("visually-hidden");
		tidakTetapBulanan.classList.add("visually-hidden");
	} else if (skemaPajak.value == "pegawaiTidakTetap") {
		pemotonganPegawaiTetap.classList.add("visually-hidden");
		pemotonganSetiapMasa.classList.add("visually-hidden");
		pemotonganMasaTerakhir.classList.add("visually-hidden");
		pemotonganTidakTetap.classList.remove("visually-hidden");
		tidakTetapHarian.classList.remove("visually-hidden");
	}
});

// mengatur jenis pemotongan pegawai tetap
pemotonganPegawaiTetap.addEventListener("change", () => {
	if (selectPemotonganPegawaiTetap.value == "setiap_masa") {
		progressBar.classList.add("visually-hidden");
		step1.classList.add("visually-hidden");
		step2.classList.add("visually-hidden");
		step3.classList.add("visually-hidden");
		pemotonganSetiapMasa.classList.remove("visually-hidden");
		pemotonganMasaTerakhir.classList.add("visually-hidden");
	} else if (selectPemotonganPegawaiTetap.value == "masa_terakhir") {
		progressBar.classList.remove("visually-hidden");
		step1.classList.remove("visually-hidden");
		step2.classList.remove("visually-hidden");
		step3.classList.remove("visually-hidden");
		pemotonganMasaTerakhir.classList.remove("visually-hidden");
		pemotonganSetiapMasa.classList.add("visually-hidden");
	}
});

// mengatur jenis pemotongan pegawai tidak tetap
pemotonganTidakTetap.addEventListener("change", () => {
	if (selectPemotonganTidakTetap.value == "harian") {
		progressBar.classList.add("visually-hidden");
		step1.classList.add("visually-hidden");
		step2.classList.add("visually-hidden");
		step3.classList.add("visually-hidden");
		tidakTetapHarian.classList.remove("visually-hidden");
		tidakTetapBulanan.classList.add("visually-hidden");
	} else if (selectPemotonganTidakTetap.value == "bulanan") {
		progressBar.classList.add("visually-hidden");
		step1.classList.add("visually-hidden");
		step2.classList.add("visually-hidden");
		step3.classList.add("visually-hidden");
		tidakTetapHarian.classList.add("visually-hidden");
		tidakTetapBulanan.classList.remove("visually-hidden");
	}
});

// fungsi kalkulator

function startCalc() {
	interval = setInterval("calc()", 1);
}

function calc() {
	// Pegawai Tetap

	// pegawai tetap masa pajak terakhir (tahunan)
	valueGajiPensiun = numeral(formMasaTerakhir.gajiPensiun.value);
	document.getElementById('gajiPensiun').value = valueGajiPensiun.format();

	valueTunjPph = numeral(formMasaTerakhir.tunjPph.value);
	document.getElementById('tunjPph').value = valueTunjPph.format();

	valueTunjLain = numeral(formMasaTerakhir.tunjLain.value);
	document.getElementById('tunjLain').value = valueTunjLain.format();

	valueTunjHonor = numeral(formMasaTerakhir.tunjHonor.value);
	document.getElementById('tunjHonor').value = valueTunjHonor.format();

	valueTunjAsuransi = numeral(formMasaTerakhir.tunjAsuransi.value);
	document.getElementById('tunjAsuransi').value = valueTunjAsuransi.format();

	valueNatura = numeral(formMasaTerakhir.natura.value);
	document.getElementById('natura').value = valueNatura.format();

	valueBonusJasa = numeral(formMasaTerakhir.bonusJasa.value);
	document.getElementById('bonusJasa').value = valueBonusJasa.format();

	valueHasilBruto = ((valueGajiPensiun.value() * 1) + (valueTunjPph.value() * 1) + (valueTunjLain.value() * 1) + (valueTunjHonor.value() * 1) + (valueTunjAsuransi.value() * 1) + (valueNatura.value() * 1) + (valueBonusJasa.value() * 1));
	document.formMasaTerakhir.hasilBruto.value = numeral(valueHasilBruto).format();

	masaAwal = numeral(formMasaTerakhir.masaAwal.value);
	masaAkhir = numeral(formMasaTerakhir.masaAkhir.value);
	var masaPenghasilan = masaAkhir.value() - masaAwal.value() + 1;

	var hitungBiayaJabatan = (valueHasilBruto * 1) * (5 / 100);
	var biayaJabatan = 0;
	if (hitungBiayaJabatan / masaPenghasilan >= 500000) {
		biayaJabatan = 500000 * masaPenghasilan;
		if (biayaJabatan >= 6000000) {
			biayaJabatan = 6000000;
		}
	} else {
		biayaJabatan = hitungBiayaJabatan;
	}
	document.formMasaTerakhir.biayaJabatan.value = numeral(biayaJabatan).format();

	valueIuranPensiun = numeral(formMasaTerakhir.iuranPensiun.value);
	document.getElementById('iuranPensiun').value = valueIuranPensiun.format();

	valueZakatSumbangan = numeral(formMasaTerakhir.zakatSumbangan.value);
	document.getElementById('zakatSumbangan').value = valueZakatSumbangan.format();

	valuePengurangSetahun = ((biayaJabatan * 1) + (valueIuranPensiun.value() * 1) + (valueZakatSumbangan.value() * 1));
	document.formMasaTerakhir.pengurangSetahun.value = numeral(valuePengurangSetahun).format();

	valueBrutoSetahun = valueHasilBruto;

	var valueHasilNeto = (valueBrutoSetahun * 1) - (valuePengurangSetahun * 1);
	document.formMasaTerakhir.hasilNeto.value = numeral(valueHasilNeto).format();

	valueNetoSebelum = numeral(formMasaTerakhir.netoSebelum.value);
	document.getElementById('netoSebelum').value = valueNetoSebelum.format();

	var valueNetoSetahun = ((valueHasilNeto * 1) + (valueNetoSebelum.value() * 1))
	document.formMasaTerakhir.netoSetahun.value = numeral(valueNetoSetahun).format();

	valuePtkpTerakhir = document.formMasaTerakhir.selectPtkpTerakhir.value;

	valuePtkp = parseInt(valuePtkpTerakhir);
	document.formMasaTerakhir.ptkp.value = numeral(valuePtkp).format();

	var valuePkpSetahun = valueNetoSetahun - valuePtkp;
	if (valueNetoSetahun < valuePtkp) {
		valuePkpSetahun = 0
	}
	document.formMasaTerakhir.pkp.value = numeral(valuePkpSetahun).format();
	var valuePkp21 = countPajakProgresif(valuePkpSetahun, Boolean(document.formMasaTerakhir.npwp.value));
	skemaPerhitungan = document.formMasaTerakhir.skemaPerhitungan.value;
	if (skemaPerhitungan === '1') {
		if (valuePkpSetahun <= 57000000) {
			grossUp = (valuePkpSetahun - 0) * 1 / 19
			valuePkp21 = grossUp
		} else if (valuePkpSetahun <= 218500000) {
			grossUp = (valuePkpSetahun - 57000000) * 3 / 17 + 3000000
			valuePkp21 = grossUp
		} else if (valuePkpSetahun <= 406000000) {
			grossUp = (valuePkpSetahun - 218500000) * 1 / 3 + 31500000
			valuePkp21 = grossUp
		} else if (valuePkpSetahun <= 3556000000) {
			grossUp = (valuePkpSetahun - 406000000) * 3 / 7 + 94000000
			valuePkp21 = grossUp
		} else if (valuePkpSetahun <= 99999999999) {
			grossUp = (valuePkpSetahun - 3556000000) * 7 / 13 + 1444000000
			valuePkp21 = grossUp
		}
	}
	document.formMasaTerakhir.pkp21.value = numeral(valuePkp21).format();

	valuePph21Sebelum = numeral(formMasaTerakhir.pph21Sebelum.value);
	document.getElementById('pph21Sebelum').value = valuePph21Sebelum.format();

	var valuePph21Terutang = ((valuePkp21 * 1) - (valuePph21Sebelum.value() * 1));
	document.formMasaTerakhir.pph21Terutang.value = numeral(valuePph21Terutang).format();

	// pegawai tetap setiap masa (bulanan)
	let brutoSebulan = numeral(document.getElementById("brutoSebulan").value);
	document.getElementById("brutoSebulan").value = brutoSebulan.format();

	function hitungTer(dpp) {
		let kategoriTer = document.getElementById("selectPTKP").value;
		let ter;

		// Kategori A
		if (kategoriTer == 54000000 || kategoriTer == 58500000) {
			if (dpp <= 5400000) {
				ter = 0;
			} else if (dpp <= 5650000) {
				ter = 0.25;
			} else if (dpp <= 5950000) {
				ter = 0.5;
			} else if (dpp <= 6300000) {
				ter = 0.75;
			} else if (dpp <= 6750000) {
				ter = 1;
			} else if (dpp <= 7500000) {
				ter = 1.25;
			} else if (dpp <= 8550000) {
				ter = 1.5;
			} else if (dpp <= 9650000) {
				ter = 1.75;
			} else if (dpp <= 10050000) {
				ter = 2;
			} else if (dpp <= 10350000) {
				ter = 2.25;
			} else if (dpp <= 10700000) {
				ter = 2.5;
			} else if (dpp <= 11050000) {
				ter = 3;
			} else if (dpp <= 11600000) {
				ter = 3.5;
			} else if (dpp <= 12500000) {
				ter = 4;
			} else if (dpp <= 13750000) {
				ter = 5;
			} else if (dpp <= 15100000) {
				ter = 6;
			} else if (dpp <= 16950000) {
				ter = 7;
			} else if (dpp <= 19750000) {
				ter = 8;
			} else if (dpp <= 24150000) {
				ter = 9;
			} else if (dpp <= 26450000) {
				ter = 10;
			} else if (dpp <= 28000000) {
				ter = 11;
			} else if (dpp <= 30050000) {
				ter = 12;
			} else if (dpp <= 32400000) {
				ter = 13;
			} else if (dpp <= 35400000) {
				ter = 14;
			} else if (dpp <= 39100000) {
				ter = 15;
			} else if (dpp <= 43850000) {
				ter = 16;
			} else if (dpp <= 47800000) {
				ter = 17;
			} else if (dpp <= 51400000) {
				ter = 18;
			} else if (dpp <= 56300000) {
				ter = 19;
			} else if (dpp <= 62200000) {
				ter = 20;
			} else if (dpp <= 68600000) {
				ter = 21;
			} else if (dpp <= 77500000) {
				ter = 22;
			} else if (dpp <= 89000000) {
				ter = 23;
			} else if (dpp <= 103000000) {
				ter = 24;
			} else if (dpp <= 125000000) {
				ter = 25;
			} else if (dpp <= 157000000) {
				ter = 26;
			} else if (dpp <= 206000000) {
				ter = 27;
			} else if (dpp <= 337000000) {
				ter = 28;
			} else if (dpp <= 454000000) {
				ter = 29;
			} else if (dpp <= 550000000) {
				ter = 30;
			} else if (dpp <= 695000000) {
				ter = 31;
			} else if (dpp <= 910000000) {
				ter = 32;
			} else if (dpp <= 1400000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}
		// Kategori B
		else if (kategoriTer == 63000000 || kategoriTer == 67500000) {
			if (dpp <= 6200000) {
				ter = 0;
			} else if (dpp <= 6500000) {
				ter = 0.25;
			} else if (dpp <= 6850000) {
				ter = 0.5;
			} else if (dpp <= 7300000) {
				ter = 0.75;
			} else if (dpp <= 9200000) {
				ter = 1;
			} else if (dpp <= 10750000) {
				ter = 1.5;
			} else if (dpp <= 11250000) {
				ter = 2;
			} else if (dpp <= 11600000) {
				ter = 2.5;
			} else if (dpp <= 12600000) {
				ter = 3;
			} else if (dpp <= 13600000) {
				ter = 4;
			} else if (dpp <= 14950000) {
				ter = 5;
			} else if (dpp <= 16400000) {
				ter = 6;
			} else if (dpp <= 18450000) {
				ter = 7;
			} else if (dpp <= 21850000) {
				ter = 8;
			} else if (dpp <= 26000000) {
				ter = 9;
			} else if (dpp <= 27700000) {
				ter = 10;
			} else if (dpp <= 29350000) {
				ter = 11;
			} else if (dpp <= 31550000) {
				ter = 12;
			} else if (dpp <= 32400000) {
				ter = 13;
			} else if (dpp <= 35400000) {
				ter = 14;
			} else if (dpp <= 39100000) {
				ter = 15;
			} else if (dpp <= 43850000) {
				ter = 16;
			} else if (dpp <= 47800000) {
				ter = 17;
			} else if (dpp <= 51400000) {
				ter = 18;
			} else if (dpp <= 56300000) {
				ter = 19;
			} else if (dpp <= 62200000) {
				ter = 20;
			} else if (dpp <= 68600000) {
				ter = 21;
			} else if (dpp <= 77500000) {
				ter = 22;
			} else if (dpp <= 89000000) {
				ter = 23;
			} else if (dpp <= 103000000) {
				ter = 24;
			} else if (dpp <= 125000000) {
				ter = 25;
			} else if (dpp <= 157000000) {
				ter = 26;
			} else if (dpp <= 206000000) {
				ter = 27;
			} else if (dpp <= 337000000) {
				ter = 28;
			} else if (dpp <= 454000000) {
				ter = 29;
			} else if (dpp <= 550000000) {
				ter = 30;
			} else if (dpp <= 695000000) {
				ter = 31;
			} else if (dpp <= 910000000) {
				ter = 32;
			} else if (dpp <= 1400000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}
		// Kategori C
		else if (kategoriTer == 72000000) {
			if (dpp <= 6600000) {
				ter = 0;
			} else if (dpp <= 6950000) {
				ter = 0.25;
			} else if (dpp <= 7350000) {
				ter = 0.5;
			} else if (dpp <= 7800000) {
				ter = 0.75;
			} else if (dpp <= 8850000) {
				ter = 1;
			} else if (dpp <= 9800000) {
				ter = 1.25;
			} else if (dpp <= 10950000) {
				ter = 1.5;
			} else if (dpp <= 11200000) {
				ter = 1.75;
			} else if (dpp <= 12050000) {
				ter = 2;
			} else if (dpp <= 12950000) {
				ter = 3;
			} else if (dpp <= 14150000) {
				ter = 4;
			} else if (dpp <= 15550000) {
				ter = 5;
			} else if (dpp <= 17050000) {
				ter = 6;
			} else if (dpp <= 19500000) {
				ter = 7;
			} else if (dpp <= 22700000) {
				ter = 8;
			} else if (dpp <= 26600000) {
				ter = 9;
			} else if (dpp <= 28100000) {
				ter = 10;
			} else if (dpp <= 30100000) {
				ter = 11;
			} else if (dpp <= 32600000) {
				ter = 12;
			} else if (dpp <= 35400000) {
				ter = 13;
			} else if (dpp <= 38900000) {
				ter = 14;
			} else if (dpp <= 43000000) {
				ter = 15;
			} else if (dpp <= 47400000) {
				ter = 16;
			} else if (dpp <= 51200000) {
				ter = 17;
			} else if (dpp <= 55800000) {
				ter = 18;
			} else if (dpp <= 60400000) {
				ter = 19;
			} else if (dpp <= 66700000) {
				ter = 20;
			} else if (dpp <= 74500000) {
				ter = 21;
			} else if (dpp <= 83200000) {
				ter = 22;
			} else if (dpp <= 95000000) {
				ter = 23;
			} else if (dpp <= 110000000) {
				ter = 24;
			} else if (dpp <= 134000000) {
				ter = 25;
			} else if (dpp <= 169000000) {
				ter = 26;
			} else if (dpp <= 221000000) {
				ter = 27;
			} else if (dpp <= 390000000) {
				ter = 28;
			} else if (dpp <= 463000000) {
				ter = 29;
			} else if (dpp <= 561000000) {
				ter = 30;
			} else if (dpp <= 709000000) {
				ter = 31;
			} else if (dpp <= 965000000) {
				ter = 32;
			} else if (dpp <= 1419000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}

		document.getElementById('ter').value = numeral(ter / 100).format("0.00%");
		return ter;
	};

	const btnHitungBulanan = document.getElementById("hitungBulanan");

	btnHitungBulanan.addEventListener("click", function (event) {
		event.preventDefault();

		let brutoSebulan = numeral(document.getElementById("brutoSebulan").value).value();
		document.getElementById("brutoSebulan").value = numeral(brutoSebulan).format();

		const radioGross = document.getElementById('gross');
		const radioGrossUp = document.getElementById('grossUp');
		let dppBulanan;

		if (radioGross.checked) {
			dppBulanan = brutoSebulan;
		} else if (radioGrossUp.checked) {
			let dppIterasi = brutoSebulan;
			let toleransi = 1;
			let selisih;

			do {
				let ter = hitungTer(dppIterasi);
				let dppBaru = brutoSebulan / ((100 - ter) / 100);
				selisih = Math.abs(dppBaru - dppIterasi);
				dppIterasi = dppBaru;
			}
			while (selisih > toleransi);

			dppBulanan = dppIterasi;
		}

		document.getElementById("dpp").value = numeral(dppBulanan).format();

		let tarifBulanan = hitungTer(dppBulanan);

		let hitungPphBulanan = dppBulanan * tarifBulanan / 100;
		document.getElementById("pph21Bulanan").value = numeral(hitungPphBulanan).format();
	});

	// Pegawai Tidak Tetap

	// pegawai tidak tetap harian
	let valueBrutoTidakTetapHarian = numeral(document.getElementById("brutoTidakTetapHarian").value);
	document.getElementById("brutoTidakTetapHarian").value = valueBrutoTidakTetapHarian.format();

	function hitungTidakTetapHarian() {
		let penghasilanBruto = valueBrutoTidakTetapHarian.value();
		let dpp, tarif, pph21;

		// Tarif Pajak TER Harian
		if (penghasilanBruto <= 450000) {
			tarif = 0;
		} else if (penghasilanBruto <= 2500000) {
			tarif = 0.005;
			// Tarif Pajak TER Pasal 17
		} else if (penghasilanBruto <= 60000000) {
			tarif = 0.05;
		} else if (penghasilanBruto <= 250000000) {
			tarif = 0.15;
		} else if (penghasilanBruto <= 500000000) {
			tarif = 0.25;
		} else if (penghasilanBruto <= 5000000000) {
			tarif = 0.30;
		} else {
			tarif = 0.35;
		}

		if (penghasilanBruto <= 2500000) {
			dpp = penghasilanBruto;
			pph21 = penghasilanBruto * tarif;
		} else {
			dpp = penghasilanBruto * 0.5;
			pph21 = penghasilanBruto * tarif * 0.5;
		}

		document.getElementById("dppTidakTetapHarian").value = numeral(dpp).format();
		document.getElementById("tarifTidakTetapHarian").value = (tarif * 100).toFixed(2) + '%';
		document.getElementById("pph21TidakTetapHarian").value = numeral(pph21).format();
	}

	const btnHitungTidakTetapHarian = document.getElementById("hitungTidakTetapHarian");
	btnHitungTidakTetapHarian.addEventListener("click", function (event) {
		event.preventDefault();
		hitungTidakTetapHarian();
	});

	// pegawai tidak tetap bulanan
	let brutoTidakTetapBulanan = numeral(document.getElementById("brutoTidakTetapBulanan").value);
	document.getElementById("brutoTidakTetapBulanan").value = brutoTidakTetapBulanan.format();

	function hitungTidakTetapBulanan() {
		let kategoriTer = parseFloat(document.getElementById("ptkpTidakTetap").value);
		var brutoBulanan = numeral(document.getElementById("brutoTidakTetapBulanan").value);
		var brutoBulanan = brutoTidakTetapBulanan.value();
		let ter = 0;

		// kategori a
		if (kategoriTer === 54000000 || kategoriTer === 58500000) {
			if (brutoBulanan <= 5400000) {
				ter = 0;
			} else if (brutoBulanan <= 5650000) {
				ter = 0.25;
			} else if (brutoBulanan <= 5950000) {
				ter = 0.5;
			} else if (brutoBulanan <= 6300000) {
				ter = 0.75;
			} else if (brutoBulanan <= 6750000) {
				ter = 1;
			} else if (brutoBulanan <= 7500000) {
				ter = 1.25;
			} else if (brutoBulanan <= 8550000) {
				ter = 1.5;
			} else if (brutoBulanan <= 9650000) {
				ter = 1.75;
			} else if (brutoBulanan <= 10050000) {
				ter = 2;
			} else if (brutoBulanan <= 10350000) {
				ter = 2.25;
			} else if (brutoBulanan <= 10700000) {
				ter = 2.5;
			} else if (brutoBulanan <= 11050000) {
				ter = 3;
			} else if (brutoBulanan <= 11600000) {
				ter = 3.5;
			} else if (brutoBulanan <= 12500000) {
				ter = 4;
			} else if (brutoBulanan <= 13750000) {
				ter = 5;
			} else if (brutoBulanan <= 15100000) {
				ter = 6;
			} else if (brutoBulanan <= 16950000) {
				ter = 7;
			} else if (brutoBulanan <= 19750000) {
				ter = 8;
			} else if (brutoBulanan <= 24150000) {
				ter = 9;
			} else if (brutoBulanan <= 26450000) {
				ter = 10;
			} else if (brutoBulanan <= 28000000) {
				ter = 11;
			} else if (brutoBulanan <= 30050000) {
				ter = 12;
			} else if (brutoBulanan <= 32400000) {
				ter = 13;
			} else if (brutoBulanan <= 35400000) {
				ter = 14;
			} else if (brutoBulanan <= 39100000) {
				ter = 15;
			} else if (brutoBulanan <= 43850000) {
				ter = 16;
			} else if (brutoBulanan <= 47800000) {
				ter = 17;
			} else if (brutoBulanan <= 51400000) {
				ter = 18;
			} else if (brutoBulanan <= 56300000) {
				ter = 19;
			} else if (brutoBulanan <= 62200000) {
				ter = 20;
			} else if (brutoBulanan <= 68600000) {
				ter = 21;
			} else if (brutoBulanan <= 77500000) {
				ter = 22;
			} else if (brutoBulanan <= 89000000) {
				ter = 23;
			} else if (brutoBulanan <= 103000000) {
				ter = 24;
			} else if (brutoBulanan <= 125000000) {
				ter = 25;
			} else if (brutoBulanan <= 157000000) {
				ter = 26;
			} else if (brutoBulanan <= 206000000) {
				ter = 27;
			} else if (brutoBulanan <= 337000000) {
				ter = 28;
			} else if (brutoBulanan <= 454000000) {
				ter = 29;
			} else if (brutoBulanan <= 550000000) {
				ter = 30;
			} else if (brutoBulanan <= 695000000) {
				ter = 31;
			} else if (brutoBulanan <= 910000000) {
				ter = 32;
			} else if (brutoBulanan <= 1400000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}

		// kategori b
		else if (kategoriTer === 63000000 || kategoriTer === 67500000) {
			if (brutoBulanan <= 6200000) {
				ter = 0;
			} else if (brutoBulanan <= 6500000) {
				ter = 0.25;
			} else if (brutoBulanan <= 6850000) {
				ter = 0.5;
			} else if (brutoBulanan <= 7300000) {
				ter = 0.75;
			} else if (brutoBulanan <= 9200000) {
				ter = 1;
			} else if (brutoBulanan <= 10750000) {
				ter = 1.5;
			} else if (brutoBulanan <= 11250000) {
				ter = 2;
			} else if (brutoBulanan <= 11600000) {
				ter = 2.5;
			} else if (brutoBulanan <= 12600000) {
				ter = 3;
			} else if (brutoBulanan <= 13600000) {
				ter = 4;
			} else if (brutoBulanan <= 14950000) {
				ter = 5;
			} else if (brutoBulanan <= 16400000) {
				ter = 6;
			} else if (brutoBulanan <= 18450000) {
				ter = 7;
			} else if (brutoBulanan <= 21850000) {
				ter = 8;
			} else if (brutoBulanan <= 26000000) {
				ter = 9;
			} else if (brutoBulanan <= 27700000) {
				ter = 10;
			} else if (brutoBulanan <= 29350000) {
				ter = 11;
			} else if (brutoBulanan <= 31550000) {
				ter = 12;
			} else if (brutoBulanan <= 32400000) {
				ter = 13;
			} else if (brutoBulanan <= 35400000) {
				ter = 14;
			} else if (brutoBulanan <= 39100000) {
				ter = 15;
			} else if (brutoBulanan <= 43850000) {
				ter = 16;
			} else if (brutoBulanan <= 47800000) {
				ter = 17;
			} else if (brutoBulanan <= 51400000) {
				ter = 18;
			} else if (brutoBulanan <= 56300000) {
				ter = 19;
			} else if (brutoBulanan <= 62200000) {
				ter = 20;
			} else if (brutoBulanan <= 68600000) {
				ter = 21;
			} else if (brutoBulanan <= 77500000) {
				ter = 22;
			} else if (brutoBulanan <= 89000000) {
				ter = 23;
			} else if (brutoBulanan <= 103000000) {
				ter = 24;
			} else if (brutoBulanan <= 125000000) {
				ter = 25;
			} else if (brutoBulanan <= 157000000) {
				ter = 26;
			} else if (brutoBulanan <= 206000000) {
				ter = 27;
			} else if (brutoBulanan <= 337000000) {
				ter = 28;
			} else if (brutoBulanan <= 454000000) {
				ter = 29;
			} else if (brutoBulanan <= 550000000) {
				ter = 30;
			} else if (brutoBulanan <= 695000000) {
				ter = 31;
			} else if (brutoBulanan <= 910000000) {
				ter = 32;
			} else if (brutoBulanan <= 1400000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}

		// kategori c
		else if (kategoriTer === 72000000) {
			if (brutoBulanan <= 6600000) {
				ter = 0;
			} else if (brutoBulanan <= 6950000) {
				ter = 0.25;
			} else if (brutoBulanan <= 7350000) {
				ter = 0.5;
			} else if (brutoBulanan <= 7800000) {
				ter = 0.75;
			} else if (brutoBulanan <= 8850000) {
				ter = 1;
			} else if (brutoBulanan <= 9800000) {
				ter = 1.25;
			} else if (brutoBulanan <= 10950000) {
				ter = 1.5;
			} else if (brutoBulanan <= 11200000) {
				ter = 1.75;
			} else if (brutoBulanan <= 12050000) {
				ter = 2;
			} else if (brutoBulanan <= 12950000) {
				ter = 3;
			} else if (brutoBulanan <= 14150000) {
				ter = 4;
			} else if (brutoBulanan <= 15550000) {
				ter = 5;
			} else if (brutoBulanan <= 17050000) {
				ter = 6;
			} else if (brutoBulanan <= 19500000) {
				ter = 7;
			} else if (brutoBulanan <= 22700000) {
				ter = 8;
			} else if (brutoBulanan <= 26600000) {
				ter = 9;
			} else if (brutoBulanan <= 28100000) {
				ter = 10;
			} else if (brutoBulanan <= 30100000) {
				ter = 11;
			} else if (brutoBulanan <= 32600000) {
				ter = 12;
			} else if (brutoBulanan <= 35400000) {
				ter = 13;
			} else if (brutoBulanan <= 38900000) {
				ter = 14;
			} else if (brutoBulanan <= 43000000) {
				ter = 15;
			} else if (brutoBulanan <= 47400000) {
				ter = 16;
			} else if (brutoBulanan <= 51200000) {
				ter = 17;
			} else if (brutoBulanan <= 55800000) {
				ter = 18;
			} else if (brutoBulanan <= 60400000) {
				ter = 19;
			} else if (brutoBulanan <= 66700000) {
				ter = 20;
			} else if (brutoBulanan <= 74500000) {
				ter = 21;
			} else if (brutoBulanan <= 83200000) {
				ter = 22;
			} else if (brutoBulanan <= 95000000) {
				ter = 23;
			} else if (brutoBulanan <= 110000000) {
				ter = 24;
			} else if (brutoBulanan <= 134000000) {
				ter = 25;
			} else if (brutoBulanan <= 169000000) {
				ter = 26;
			} else if (brutoBulanan <= 221000000) {
				ter = 27;
			} else if (brutoBulanan <= 390000000) {
				ter = 28;
			} else if (brutoBulanan <= 463000000) {
				ter = 29;
			} else if (brutoBulanan <= 561000000) {
				ter = 30;
			} else if (brutoBulanan <= 709000000) {
				ter = 31;
			} else if (brutoBulanan <= 965000000) {
				ter = 32;
			} else if (brutoBulanan <= 1419000000) {
				ter = 33;
			} else {
				ter = 34;
			}
		}

		let pph21 = brutoBulanan * (ter / 100);

		document.getElementById("dppTidakTetapBulanan").value = numeral(brutoBulanan).format();
		document.getElementById("tarifTidakTetapBulanan").value = ter.toFixed(2) + "%";
		document.getElementById("pph21TidakTetapBulanan").value = numeral(pph21).format();
	}

	const btnHitungTidakTetapBulanan = document.getElementById("hitungTidakTetapBulanan");
	btnHitungTidakTetapBulanan.addEventListener("click", function (event) {
		event.preventDefault();
		hitungTidakTetapBulanan();
	});
}

// 

function differentNumber(angka1, angka2) {
	// Pastikan kedua argumen adalah angka
	// Hitung selisih antara dua angka
	var selisih = Math.abs(angka1 - angka2);

	return selisih;
}

function countPajakProgresif(pkpr, npwpStatus) {
	pkp = pkpr;
	pkpCounted = 0;
	if (pkp <= 60000000) {
		pkpCounted = (pkp * (npwpStatus ? 0.05 : 0.06))
		return pkpCounted;
	}
	if (pkp > 60000000 && pkp <= 250000000) {
		pkpCounted = (60000000 * (npwpStatus ? 0.05 : 0.06)) + (differentNumber(pkp, 60000000) * (npwpStatus ? 0.15 : 0.18))
		return pkpCounted;
	}

	if (pkp > 250000000 && pkp <= 500000000) {
		pkpCounted = (60000000 * (npwpStatus ? 0.05 : 0.06)) + (190000000 * (npwpStatus ? 0.15 : 0.18)) + (differentNumber(pkp, 250000000) * (npwpStatus ? 0.25 : 0.3))
		return pkpCounted;
	}
	if (pkp > 500000000 && pkp <= 5000000000) {
		pkpCounted = (60000000 * (npwpStatus ? 0.05 : 0.06)) + (190000000 * (npwpStatus ? 0.15 : 0.18)) + (250000000 * (npwpStatus ? 0.25 : 0.3)) + (differentNumber(pkp, 500000000) * (npwpStatus ? 0.3 : 0.36))

		return pkpCounted;
	}
	if (pkp > 5000000000) {
		pkpCounted = (60000000 * (npwpStatus ? 0.05 : 0.06)) + (190000000 * (npwpStatus ? 0.15 : 0.18)) + (250000000 * (npwpStatus ? 0.25 : 0.3)) + (4500000000 * (npwpStatus ? 0.3 : 0.36)) + (differentNumber(pkp, 5000000000) * (npwpStatus ? 0.35 : 0.42))
		return pkpCounted;
	}

	return pkpCounted;
}

function stopCalc() {
	clearInterval(interval);
}
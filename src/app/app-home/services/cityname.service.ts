import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class CityNameService {
    private cityname:string[] = [
        'Badarganj','Bajitpur','Bandarban','Baniachang','Barisal','Bera','Bhairab Bazar' ,'Bhandaria','Bhatpara Abhaynagar','Bheramara','Bhola','Bogra','Burhanuddin','Char Bhadrasan','Chhagalnaiya','Chhatak','Chilmari','Chittagong','Comilla','Cox\'s Bazar','Dhaka','Dinajpur','Dohar','Faridpur','Fatikchari','Feni','Gafargaon','Gaurnadi','Habiganj','Hajiganj','Ishurdi','Jamalpur','Jessore','Jhingergacha','Joypur Hat','Kalia','Kaliganj','Kesabpur','Khagrachhari','Khulna','Kishorganj','Kushtia','Laksham','Lakshmipur','Lalmanirhat','Lalmohan','Madaripur','Manikchari','Mathba','Maulavi Bazar','Mehendiganj','Mirzapur','Morrelgonj','Muktagacha','Mymensingh','Nabinagar','Nagarpur','Nageswari','Nalchiti','Narail','Narayanganj','Narsingdi','Nawabganj','Netrakona','Pabna','Palang','Panchagarh','Par Naogaon','Parbatipur','Patiya','Phultala','Pirgaaj','Pirojpur','Raipur','Rajshahi','Ramganj','Rangpur','Raojan','Saidpur','Sakhipur','Sandwip','Sarankhola','Sarishabari','Satkania','Satkhira','Shahzadpur','Sherpur','Shibganj','Sirajganj','Sylhet','Chakaria','Tangail','Teknaf','Thakurgaon','Tungi','Tungipara','Uttar Char Fasson'
    ]

    getcityName() {
        return this.cityname;
    }
}
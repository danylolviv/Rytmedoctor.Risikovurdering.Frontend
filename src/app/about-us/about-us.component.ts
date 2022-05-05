import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  cleanEnergy = 'Running on 100% clean energy'
  readMore = 'Læs mere'

  leftHeader = 'Vi tror på handling'
  leftText = 'I mere end 20 år har Dansk Scanning udelukkende benyttet sig bæredygtige energimetoder, som vindenergi, jordvarme og solvarme. '
  leftHidden = 'Virksomheder der driver moderne servercentre, har et specielt ansvar for miljøet, netop fordi de ofte bruger rigtig megen energi - og Dansk Scanning er desværre ingen undtagelse.'

  middleTop = '“Den nuværende internationale situation, understreger med alt ønskelig tydelighed også betydningen af at være uafhængige af energi leverandører, med en uacceptabel holdning til etik og moral”'
  middleLeftHeader = 'Hvem er vi?'
  middleRighrtHeader = 'Det nytter at gøre noget'
  middleLeftParagraf = 'Vi lever af at udvikle og drive SaaS løsninger som weblager.dk og weblager.no, med mere end 15.000.000 downloads om året. Vi driver i alt tre energislugende servercentre, hvor vi kører 24 * 7 drift.'
  middleLeftHidden = 'Et servercenter kræver desværre rigtig megen energi. Selvfølgelig kan man dække sig ind under at SaaS løsninger i princippet er miljørigtige, fordi borgerne kan sidde hjemme og betjene sig selv, man skal ikke køre til kommunen, kommunen skal ikke bruge resurser på et fysisk arkiv osv. - men alligevel ...'
  middleRightParagraf = 'Med en investering på over 30 millioner i bæredygtig energiproduktion, har vi siden år 2000 genereret 7 - 9 millioner KWh ren energi om året. Herved er CO2 belastningen af miljøet reduceret med mere end 10 tons i døgnet i gennemsnit, de sidste 20 år.'

  rightHeader = 'Vil være et godt eksempel'
  rightParagraf = 'Dansk Scanning er heller ikke tilsluttet offentlig fjernvarmeforsyning.'
  rightHidden1 = 'Når varmepumper drives af vindenergi og opvarmer lavenergibygninger med varme genvinding, og samtidigt køler serverrum, da går tingene op i en højere enhed.'
  rightHidden2 = 'Dansk Scanning er derfor heller ikke tilsluttet offentlig fjernvarmeforsyning.'
  ngOnInit(): void {
  }

}

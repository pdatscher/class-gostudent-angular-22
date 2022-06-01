import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Tutoringoffer} from "../shared/tutoringoffer";
import {OfferFactory} from "../shared/offer-factory";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {ErrorMessage, ErrorMessages} from "./newoffer-form-error-messages";


@Component({
  selector: 'bs-newoffer-form',
  templateUrl: './newoffer-form.component.html',
  styles: []
})
export class NewofferFormComponent implements OnInit {

  newofferForm: FormGroup = new FormGroup({});

  offer = OfferFactory.empty();
  errors: { [key: string]: string } = {} // leeres assoziatives Array
  isUpdatingOffer = false;


  constructor(
    private fb: FormBuilder,
    private gs: GoStudentServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initOffer()
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingOffer = true;
      this.gs.getSingle(id).subscribe(offer => {

        this.offer = offer;
        this.initOffer();
        this.buildDatesArray();
      });
    } else {
      this.initOffer();
      this.addDateControl();
    }

  }


  initOffer() {
    this.newofferForm = this.fb.group({


      headline: [this.offer.headline, Validators.required],
      subject: [this.offer.subject, Validators.required],
      description: this.offer.description,
      user_id: [this.offer.user_id],


      dates: this.fb.array([])

    });

    this.newofferForm.statusChanges.subscribe(() =>
      this.updateErrorMessages()
    )
  }

  get dates() {
    return this.newofferForm.controls['dates'] as FormArray
  }

  getDateControls() {
    return this.dates.controls as FormGroup[]
  }

  updateErrorMessages() {
    console.log("Is invalid? " + this.newofferForm.invalid);
    this.errors = {};

    for (const message of ErrorMessages) {
      const control = this.newofferForm.get(message.forControl);

      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }

  }

  buildDatesArray() {
    if (this.offer.dates) {
      this.dates.clear()
      for (let date of this.offer.dates) {
        let fg = this.fb.group({
          day: new FormControl(date.day, [Validators.required]),
          time: new FormControl(date.time, [Validators.required])
        });
        this.dates.push(fg);
      }
    }
    if (this.dates.length === 0) {
      this.addDateControl()
    }
  }

  addDateControl() {
    this.dates.push(this.fb.group({day: null, time: null}));
  }

  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("user_id"));
  }


  submitForm() {
    /*this.newofferForm.value.dates = this.newofferForm.value.dates.filter(
      (thumbnail: { url: string; }) => thumbnail.url
    );*/

    // Merge existing offer with form values
    const updatedOffer={...this.offer, ...this.newofferForm.value}
    const offer: Tutoringoffer = OfferFactory.fromObject(updatedOffer);

    offer.user_id = this.getCurrentUserId()

    if (this.isUpdatingOffer) {
      this.gs.update(offer).subscribe(res => {
        this.router.navigate(['../../offers', offer.id], {
          relativeTo: this.route
        });

      });
    } else {
      this.gs.create(offer).subscribe(res => {
        this.offer = OfferFactory.empty();
        this.newofferForm.reset(OfferFactory.empty());
        this.router.navigate(["../offers"], {relativeTo: this.route});

      });
      //todo: save offer
    }

  }


}

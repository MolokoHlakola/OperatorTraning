import { RubricsElement } from "./rubrics-element.js?version=4d367c6d";
import { html } from "/webcomponents/assets/lit-element/lit-element.js?version=4d367c6d";
import { SakaiRubricsLanguage, tr } from "./sakai-rubrics-language.js?version=4d367c6d";
import { SakaiRubricsHelpers } from "./sakai-rubrics-helpers.js?version=4d367c6d";

class SakaiRubricStudentButton extends RubricsElement {

  constructor() {

    super();

    this.hidden = true;
    this.instructor = false;
    this.i18nPromise = SakaiRubricsLanguage.loadTranslations();
  }

  static get properties() {

    return {
      token: String,
      entityId: { attribute: "entity-id", type: String },
      toolId: { attribute: "tool-id", type: String },
      evaluatedItemId: { attribute: "evaluated-item-id", type: String },
      hidden: Boolean,
      instructor: Boolean
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {

    super.attributeChangedCallback(name, oldValue, newValue);

    if (this.token && this.toolId && this.entityId) {
      this.setHidden();
    }
  }

  set token(newValue) {

    this.i18nPromise.then(r => this.initLightbox(newValue, r));
    this._token = newValue;
  }

  get token() {
    return this._token;
  }

  render() {

    return html`${this.hidden ? "" : html`
      <a @click=${this.showRubric} href="javascript:;" title="${tr("preview_rubric")}"><span class="fa fa-table" /></a>
    `}`;
  }

  showRubric(e) {
    this.showRubricLightbox(undefined, { "tool-id": this.toolId, "entity-id": this.entityId, "evaluated-item-id": this.evaluatedItemId, "instructor": this.instructor }, e.target);
  }

  setHidden() {

    SakaiRubricsHelpers.get("/rubrics-service/rest/rubric-associations/search/by-tool-item-ids", "Bearer " + this.token, { params: { toolId: this.toolId, itemId: this.entityId } }).then(data => {

      const association = data._embedded["rubric-associations"][0];

      if (!association) {
        this.hidden = true;
      } else {
        this.hidden = association.parameters.hideStudentPreview && !this.instructor;
      }
    });
  }
}

customElements.define("sakai-rubric-student-button", SakaiRubricStudentButton);
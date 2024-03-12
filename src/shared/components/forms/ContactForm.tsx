import InputText from '@/shared/components/forms/InputText';
import InputArea from '@/shared/components/forms/InputArea';
import { getI18N, getCountryListByLanguage } from "@/shared/i18n";
import FormButton from '@/shared/components/forms/FormButton';
import DataList from '@/shared/components/forms/DataList';
// import styles from '@/shared/components/styles/ContactForm.module.css';


interface ContactFormProps {
  language: string;
  sendText?: string;
  subject?: string;
  hiddenSubject?: boolean;
}

export default function ContactForm({language, hiddenSubject, subject, sendText}: ContactFormProps) {
  const i18n = getI18N({ language });
  const countryList = getCountryListByLanguage({ language });
  return (
    <form className="flex-1">
      <InputText name={i18n.CONTACT_FORM.FORM.NAME.ID} label={i18n.CONTACT_FORM.FORM.NAME.LABEL} placeholder={i18n.CONTACT_FORM.FORM.NAME.PLACEHOLDER} />
      <InputText name={i18n.CONTACT_FORM.FORM.EMAIL.ID} label={i18n.CONTACT_FORM.FORM.EMAIL.LABEL} placeholder={i18n.CONTACT_FORM.FORM.EMAIL.PLACEHOLDER} />
      <div class="flex flex-col lg:flex-row lg:gap-3">
        <DataList className='flex-1' name={i18n.CONTACT_FORM.FORM.COUNTRY.ID} label={i18n.CONTACT_FORM.FORM.COUNTRY.LABEL} placeholder={i18n.CONTACT_FORM.FORM.COUNTRY.PLACEHOLDER} options={countryList as { option: string; label: string; }[]} />
        <InputText className='flex-1' name={i18n.CONTACT_FORM.FORM.PHONE.ID} label={i18n.CONTACT_FORM.FORM.PHONE.LABEL} placeholder={i18n.CONTACT_FORM.FORM.PHONE.PLACEHOLDER} />
      </div>
      {
        !hiddenSubject && (
          <InputText name={i18n.CONTACT_FORM.FORM.SUBJECT.ID} label={i18n.CONTACT_FORM.FORM.SUBJECT.LABEL} placeholder={i18n.CONTACT_FORM.FORM.SUBJECT.PLACEHOLDER} value={subject || ''} />
        )
      }
      <InputArea name={i18n.CONTACT_FORM.FORM.MESSAGE.ID} label={i18n.CONTACT_FORM.FORM.MESSAGE.LABEL} placeholder={i18n.CONTACT_FORM.FORM.MESSAGE.PLACEHOLDER} />
      <FormButton text={sendText || i18n.CONTACT_FORM.FORM.SEND} />
    </form>
  );
}
import { useTranslations } from "next-intl";

export default function Introduction() {
  const t = useTranslations("HomePage");

  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        <h1>{t("intro")}</h1>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex flex-col md:flex-row list-disc gap-y-2 gap-x-10 text-neutral-700 dark:text-neutral-400">
          <li>
            {t("location")}
          </li>
          <li>{t("location_type")}</li>
        </ul>
        <p className="mt-6 leading-loose text-neutral-600 dark:text-neutral-300">
          {t("resume")}
        </p>
      </div>
    </section>
  );
}

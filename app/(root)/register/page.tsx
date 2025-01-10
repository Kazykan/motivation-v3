export default function Register() {
  return (
    <main>
      <header className="bg-blue-500 text-white py-8 px-4">
        <h1 className="text-3xl font-bold text-center">
          Уважаемые родители, добро пожаловать в новое измерение воспитания!
        </h1>
      </header>

      <section className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Вы стремитесь к тому, чтобы ваш ребенок вырос самостоятельным, ответственным и мотивированным? Тогда вы
            попали по адресу!
          </h2>
          <p className="text-gray-700 mb-4">
            Наше приложение — это не просто инструмент, это партнер в воспитании, который поможет вам перейти от нотаций
            и принуждения к взрослым и понятным отношениям с вашим ребенком.
          </p>

          <h3 className="text-xl font-bold mt-6">Что получает ваш ребенок:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <span className="font-bold">✅</span> Получит <b>свободу выбора</b>, а вместе с ней —{" "}
              <b>ответственность за свои решения</b>.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Научится самостоятельно управлять своим временем и усилиями.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Увидит связь между своими действиями и результатом.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Будет мотивирован <b>достижениями</b>, а не страхом наказания.
            </li>
            <li className="mb-2">
              <span className="font-bold">✅</span> Развиет <b>дисциплину</b>, <b>ответственность</b>,{" "}
              <b>финансовую грамотность</b>.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6">Ваша роль:</h3>
          <p className="text-gray-700 mb-4">
            Мы создали среду, где нет места эмоциям, есть только четкие правила и “цены”, как в реальной жизни. Вы, как
            родитель, становитесь архитектором этой среды, устанавливаете правила и наблюдаете за ростом вашего ребенка.
          </p>
          <p className="text-gray-700 mb-4">Вы больше не “полицейский”, а наставник и партнер.</p>

          <h3 className="text-xl font-bold mt-6">Важный результат:</h3>
          <p className="text-gray-700 mb-4">
            Это ваш шанс воспитать успешного человека, который умеет принимать решения, нести ответственность и
            добиваться своих целей.
          </p>

          <p className="text-xl font-bold mt-6 mb-4">
            <span className="text-blue-600">Начните строить будущее своего ребенка уже сегодня!</span>
          </p>
        </div>
      </section>
    </main>
  );
}

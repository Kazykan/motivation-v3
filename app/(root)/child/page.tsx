export default function Register() {
  return (
    <>
      <header className="bg-green-500 text-white py-8 px-4">
        <h1 className="text-3xl font-bold text-center">Привет, юный лидер! Готов взять свою жизнь в свои руки?</h1>
      </header>

      <section className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Здесь ты сам решаешь, как и когда тебе учиться, заниматься спортом и следить за порядком.
          </h2>
          <p className="text-gray-700 mb-4">
            Это не скучные уроки и нотации, это игра, где ты сам устанавливаешь правила и сам получаешь награды.
          </p>

          <h3 className="text-xl font-bold mt-6">Здесь ты:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">
              <span className="font-bold">🚫</span> Нет криков и ругани, есть понятные “цены” на каждый вид
              деятельности.
            </li>
            <li className="mb-2">
              <span className="font-bold">💰</span> Твои усилия не останутся незамеченными: ты получишь{" "}
              <b>честное вознаграждение</b> за свою работу.
            </li>
            <li className="mb-2">
              <span className="font-bold">🏆</span> Ты сам контролируешь свой успех: чем больше ты делаешь, тем больше
              получаешь.
            </li>
            <li className="mb-2">
              <span className="font-bold">💪</span> Ты сам учишься быть <b>ответственным</b> и <b>самостоятельным</b>,
              как настоящий взрослый.
            </li>
            <li className="mb-2">
              <span className="font-bold">🎯</span> Ты сам решаешь, что для тебя важнее: учиться, заниматься спортом или
              что-то еще.
            </li>
            <li className="mb-2">
              <span className="font-bold">🦸</span> Ты — главный герой своей истории, и только от тебя зависит, какой
              будет ее концовка.
            </li>
          </ul>

          <p className="text-xl font-bold mt-6 mb-4">
            <span className="text-green-600">Готов стать хозяином своей жизни? Тогда начни играть!</span>
          </p>
        </div>
      </section>
    </>
  );
}

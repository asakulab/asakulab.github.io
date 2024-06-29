let stimuli = [
    {row_id: 1, item_1: 'ラアナ', item_2: 'ジイグ', item_3: 'ルウゴ', item_4: 'メエセ', item_5: 'ヨオデ', item_6: 'モッチ', item_7: 'ベンハ'},
    {row_id: 2, item_1: 'ワアツ', item_2: 'チイナ', item_3: 'ブウヌ', item_4: 'ケエバ', item_5: 'ポオニ', item_6: 'コッギ', item_7: 'ルンデ'},
    {row_id: 3, item_1: 'タアレ', item_2: 'ピイヌ', item_3: 'グウホ', item_4: 'ヘエス', item_5: 'ソオミ', item_6: 'セッギ', item_7: 'サンハ'},
    {row_id: 4, item_1: 'ガアギ', item_2: 'ジイト', item_3: 'ズウゼ', item_4: 'ネエテ', item_5: 'ロオワ', item_6: 'ヌッピ', item_7: 'ゲング'},
    {row_id: 5, item_1: 'サアベ', item_2: 'ミイタ', item_3: 'スウセ', item_4: 'テエヒ', item_5: 'ドオノ', item_6: 'メッチ', item_7: 'ヨンバ'},
    {row_id: 6, item_1: 'カアク', item_2: 'ミイセ', item_3: 'ブウハ', item_4: 'テエベ', item_5: 'ゴオラ', item_6: 'キッダ', item_7: 'ズンム'},
    {row_id: 7, item_1: 'ヤアチ', item_2: 'リイニ', item_3: 'ムウラ', item_4: 'ベエモ', item_5: 'トオナ', item_6: 'ブッメ', item_7: 'サンレ'},
    {row_id: 8, item_1: 'ラアネ', item_2: 'ミイメ', item_3: 'ルウス', item_4: 'ケエノ', item_5: 'ゴオブ', item_6: 'ヌッグ', item_7: 'ヤンハ'},
    {row_id: 9, item_1: 'バアト', item_2: 'ミイマ', item_3: 'フウホ', item_4: 'ネエガ', item_5: 'ヨオツ', item_6: 'エッル', item_7: 'レンス'},
    {row_id: 10, item_1: 'パアセ', item_2: 'ピイツ', item_3: 'ルウミ', item_4: 'ネエマ', item_5: 'ポオム', item_6: 'ザッチ', item_7: 'エンメ'},
    {row_id: 11, item_1: 'ザアミ', item_2: 'ヒイズ', item_3: 'ユウヌ', item_4: 'セエモ', item_5: 'ノオマ', item_6: 'レッダ', item_7: 'リンプ'},
    {row_id: 12, item_1: 'ダアロ', item_2: 'リイズ', item_3: 'グウキ', item_4: 'ネエピ', item_5: 'ノオハ', item_6: 'ペッモ', item_7: 'デンメ'},
    {row_id: 13, item_1: 'ザアギ', item_2: 'ヒイデ', item_3: 'ズウジ', item_4: 'ネエゴ', item_5: 'ノオケ', item_6: 'バッロ', item_7: 'トンワ'},
    {row_id: 14, item_1: 'ヤアヘ', item_2: 'ヒイボ', item_3: 'グウゼ', item_4: 'テエス', item_5: 'ノオヌ', item_6: 'フッチ', item_7: 'ヨント'},
    {row_id: 15, item_1: 'ワアニ', item_2: 'ビイカ', item_3: 'グウソ', item_4: 'ネエト', item_5: 'ボオス', item_6: 'アッペ', item_7: 'ゲンダ'},
    {row_id: 16, item_1: 'ザアド', item_2: 'ジイダ', item_3: 'ヌウム', item_4: 'ゼエケ', item_5: 'ボオデ', item_6: 'ウッビ', item_7: 'メンフ'}
];

let relations = [
    {Item_ID: 1, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_q: 0, sti_q1: 1, div_q: 'は', sti_q2: 2, Question_1: 'の反対ですか？'},
    {Item_ID: 2, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'と同じである', type_q: 0, sti_q1: 1, div_q: 'は', sti_q2: 3, Question_1: 'と同じですか？'},
    {Item_ID: 3, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'と同じである', type_q: 0, sti_q1: 1, div_q: 'は', sti_q2: 3, Question_1: 'と同じですか？'},
    {Item_ID: 4, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'の反対である', type_q: 0, sti_q1: 3, div_q: 'は', sti_q2: 2, Question_1: 'と同じですか？'},
    {Item_ID: 5, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'と同じである', type_q: 0, sti_q1: 3, div_q: 'は', sti_q2: 1, Question_1: 'と同じですか？'},
    {Item_ID: 6, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 3, div_2: 'は', sti_4: 1, Relation_2: 'と同じである', type_q: 0, sti_q1: 2, div_q: 'は', sti_q2: 3, Question_1: 'の反対ですか？'},
    {Item_ID: 7, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'の反対である', type_q: 0, sti_q1: 3, div_q: 'は', sti_q2: 1, Question_1: 'と同じですか？'},
    {Item_ID: 8, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 3, div_2: 'は', sti_4: 1, Relation_2: 'の反対である', type_q: 0, sti_q1: 1, div_q: 'は', sti_q2: 3, Question_1: 'と同じですか？'},
    {Item_ID: 9, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 3, div_2: 'は', sti_4: 1, Relation_2: 'の反対である', type_q: 0, sti_q1: 2, div_q: 'は', sti_q2: 1, Question_1: 'と同じですか？'},
    {Item_ID: 10, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'と同じである', type_q: 0, sti_q1: 3, div_q: 'は', sti_q2: 1, Question_1: 'の反対ですか？'},
    {Item_ID: 11, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 3, div_2: 'は', sti_4: 1, Relation_2: 'と同じである', type_q: 0, sti_q1: 1, div_q: 'は', sti_q2: 3, Question_1: 'の反対ですか？'},
    {Item_ID: 12, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'と同じである', type_3: 0, sti_5: 3, div_3: 'は', sti_6: 4, Relation_3: 'と同じである', type_q: 0, sti_q1: 4, div_q: 'は', sti_q2: 2, Question_1: 'の反対ですか？'},
    {Item_ID: 13, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'の反対である', type_3: 0, sti_5: 3, div_3: 'は', sti_6: 4, Relation_3: 'の反対である', type_q: 0, sti_q1: 4, div_q: 'は', sti_q2: 1, Question_1: 'の反対ですか？'},
    {Item_ID: 14, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'と同じである', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'の反対である', type_3: 0, sti_5: 3, div_3: 'は', sti_6: 4, Relation_3: 'の反対である', type_q: 0, sti_q1: 4, div_q: 'は', sti_q2: 1, Question_1: 'と同じですか？'},
    {Item_ID: 15, type_1: 0, sti_1: 1, div_1: 'は', sti_2: 2, Relation_1: 'の反対である', type_2: 0, sti_3: 2, div_2: 'は', sti_4: 3, Relation_2: 'の反対である', type_3: 0, sti_5: 3, div_3: 'は', sti_6: 4, Relation_3: 'と同じである', type_q: 0, sti_q1: 2, div_q: 'は', sti_q2: 3, Question_1: 'の反対ですか？'}
];

let currentQuestionIndex = 0;   // 現在の質問項目
let answers = [];               // CSVファイルに送るデータ
let buttonOrderHistory = [];    // ボタンの呈示履歴
let timerInterval;
let startTime;
let timeRecords = []; 
let participantID = '';         // 参加者ID
let currentStimulusRow = null;  // 現在のstimulusRowを保持する変数
let usedStimuliIndices = [];    // 使用済みの刺激項目のインデックスを保持する変数
let buttonPosition; // ボタンの位置を記録する変数を宣言

const stepsList = [15, 14, 13, 13, 12]; // ブロックに含まれる試行数
let currentStepIndex = 0;        // 現在のステップリストインデックス
let currentStep = 0;             // 試行数カウンター
let progressBoxesCount = 0;      // 進捗ボックスの数


// 表紙　⇒　参加者ID入力画面
function showParticipantIDSection() {
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('participant-id-section').classList.remove('hidden');
}

// 参加者ID入力画面　⇒　課題説明画面　＋　「参加者IDの検証」
function validateParticipantID() {
    participantID = document.getElementById('participant-id-input').value;
    email = document.getElementById('email-input').value;
    age = document.getElementById('age-input').value;
    gender = document.getElementById('gender-input').value;
    document.getElementById('participant-id-section').classList.add('hidden');
    document.getElementById('instructions-section').classList.remove('hidden');
}

// 警告メッセージを表示するためのモーダルを作成
function showModal(message) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = hideModal;

    const modal = document.createElement('div');
    modal.className = 'center-modal';
    modal.innerHTML = `<br><p>${message}</p><br><div class="btn btn-primary" onclick="hideModal()">閉じる</div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

// モーダルを非表示にする関数
function hideModal() {
    const modal = document.querySelector('.center-modal');
    const overlay = document.querySelector('.overlay');
    if (modal) modal.remove();
    if (overlay) overlay.remove();
}

// 準備
function loadQuestions() {
    progressBoxesCount = stepsList.length;
    createProgressBoxes(progressBoxesCount);
    updateCounter();
}

// 進捗ボックス
function createProgressBoxes(count) {
    const progressBoxesContainers = document.querySelectorAll('.progress-boxes');
    progressBoxesContainers.forEach(container => {
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const box = document.createElement('div');
            box.className = 'progress-box';
            container.appendChild(box);
        }
    });
}

// 課題説明画面　⇒　RAI-J
function startSurvey() {
    document.getElementById('instruction').innerHTML = '<div class="preparation-screen">+</div>';
    setTimeout(() => {
        document.getElementById('instructions-section').classList.add('hidden');
        document.getElementById('survey-section').classList.remove('hidden');
        showQuestion();
    }, 500);
}

// 課題画面
function showQuestion() {
    if (currentQuestionIndex < relations.length) {
        let randomRowIndex;
        do {
            randomRowIndex = Math.floor(Math.random() * stimuli.length);
        } while (usedStimuliIndices.includes(randomRowIndex));
        
        usedStimuliIndices.push(randomRowIndex);
        currentStimulusRow = shuffle(Object.values(stimuli[randomRowIndex]).slice(1));
        const stimulusMap = {
            1: currentStimulusRow[0],
            2: currentStimulusRow[1],
            3: currentStimulusRow[2],
            4: currentStimulusRow[3],
            5: currentStimulusRow[4]
        };

        const relation = relations[currentQuestionIndex];
        let relationText = '';
        const presentedRelations = [];

        for (let i = 1; i <= 4; i++) {
            if (relation[`Relation_${i}`]) {
                const target1 = stimulusMap[relation[`sti_${i * 2 - 1}`]] || '';
                const target2 = stimulusMap[relation[`sti_${i * 2}`]] || '';
                presentedRelations.push({
                    relation: relation[`Relation_${i}`],
                    target1: target1,
                    target2: target2,
                    div: relation[`div_${i}`],
                    type: relation[`type_${i}`]
                });
                if (relation[`type_${i}`] == 0) {
                    relationText += `<div><span class="stimulus-text">${target1}</span><span class="relational-text"> ${relation[`div_${i}`]} </span><span class="stimulus-text">${target2}</span><span class="relational-text"> ${relation[`Relation_${i}`]}</span></div>`;
                } else if (relation[`type_${i}`] == 1) {
                    relationText += `<div><span class="stimulus-text">${target2}</span><span class="relational-text"> ${relation[`div_${i}`]} </span><span class="stimulus-text">${target1}</span><span class="relational-text"> ${relation[`Relation_${i}`]}</span></div>`;
                } else if (relation[`type_${i}`] == 2) {
                    relationText += `<div><span class="type-N">　</span></div>`;
                } else if (relation[`type_${i}`] == 3) {
                    relationText += `<div><span class="stimulus-text">${target1}</span><span class="relational-text"> が </span><span class="stimulus-text">${target2}</span><span class="relational-text"> ${relation[`div_${i}`]}</span><span class="stimulus-text">${target2}</span><span class="relational-text"> が </span><span class="stimulus-text">${target1}</span><span class="relational-text"> ${relation[`Relation_${i}`]}</span></div>`;
                } else {
                    relationText += `<div>ERROR</div>`;
                }
            }
        }
        document.getElementById('relation-text').innerHTML = relationText.trim();

        const targetQ1 = stimulusMap[relation.sti_q1] || '';
        const targetQ2 = stimulusMap[relation.sti_q2] || '';
        let questionText = `<span class="questionText">${targetQ1}</span> ${relation.div_q} <span class="questionText">${targetQ2}</span> ${relation.Question_1}`;

        if (relation.Question_2) {
            const targetQ3 = stimulusMap[relation.sti_q3] || '';
            const targetQ4 = stimulusMap[relation.sti_q4] || '';
            questionText += `<br><span class="questionText">${targetQ3}</span> ${relation.div_q2} <span class="questionText">${targetQ4}</span> ${relation.Question_2}`;
        }
        
        document.getElementById('question-text').innerHTML = questionText;

        randomizeButtonOrder();
        updateCounter();
        updateCounterColor();
        updateProgressBoxes();

        startTimer();
    } else {
        endSurvey();  // 終了時の処理を endSurvey 関数に移動
    }
}

// 終了時の処理
function endSurvey() {
    document.getElementById('survey-section').classList.add('hidden');
    document.getElementById('thank-you-section').classList.remove('hidden');
    console.log("回答:", answers);
    console.log("時間記録:", timeRecords);
    updateProgressBoxes();

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            answers,
            relations
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Data successfully submitted');
            document.getElementById('error-button-container').classList.add('hidden');
        } else {
            console.error('Error in data submission');
            showRetryButtons();
        }
    })
    .catch(error => {
        console.error('Error in data submission', error);
        showRetryButtons();
    });
}

// 再送信ボタンとCSVダウンロードボタンの表示
function showRetryButtons() {
    document.getElementById('error-button-container').classList.remove('hidden');
}

// 再送信処理
function retrySubmission() {
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            answers,
            relations
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('Data successfully resubmitted');
            document.getElementById('error-button-container').classList.add('hidden');
        } else {
            console.error('Error in data resubmission');
        }
    })
    .catch(error => {
        console.error('Error in data resubmission', error);
    });
}

// CSVダウンロード処理
function downloadCSV() {
    const csvData = answers.map(answer => ({
        participantID: answer.participantID,
        questionNumber: answer.questionNumber,
        selectedAnswer: answer.selectedAnswer,
        buttonPosition: answer.buttonPosition, // 追加: ボタンの位置
        elapsedTime: answer.elapsedTime,
        presentedRelations: answer.presentedRelations.map(relation => 
            `${relation.target1} ${relation.div} ${relation.target2} ${relation.relation}`
        ).join(' | '),
        questionText: answer.questionText,
    }));

    const csvContent = Papa.unparse(csvData);
    const bom = '\uFEFF'; // BOM（バイトオーダーマーク）を追加
    const blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'RAI-J_results.csv';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// タイマーの開始
function startTimer() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 30; // 制限時間を設定

    timerElement.textContent = timeLeft.toString().padStart(2, '0');
    startTime = Date.now();

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerElement.textContent = timeLeft.toString().padStart(2, '0');

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('relation-text').innerHTML = '<span class="Relational-timeout">時間切れ</span>';
            document.getElementById('question-text').innerHTML = '<span class="Question-timeout">5秒後に次に進みます</span>';
            document.getElementById('button-left').innerHTML = '';
            document.getElementById('button-right').innerHTML = '';
            setTimeout(() => {
                submitAnswer('時間切れ');
            }, 0); // ms後に次の質問を呈示 現在は0msで非表示 
        }
    }, 1000);
}

// 選択肢ボタンの無作為化　＋　4回連続同じ配置にならない構成
function randomizeButtonOrder() {
    const buttonLeft = document.getElementById('button-left');
    const buttonRight = document.getElementById('button-right');
    buttonLeft.innerHTML = '';
    buttonRight.innerHTML = '';

    const yesButton = document.createElement('button');
    yesButton.type = 'button';
    yesButton.className = 'btn btn-success';
    yesButton.textContent = 'はい';

    const noButton = document.createElement('button');
    noButton.type = 'button';
    noButton.className = 'btn btn-danger';
    noButton.textContent = 'いいえ';

    if (buttonOrderHistory.length >= 3 && buttonOrderHistory.slice(-3).every(order => order === buttonOrderHistory[buttonOrderHistory.length - 1])) {
        if (buttonOrderHistory[buttonOrderHistory.length - 1] === 'yes-left') {
            buttonLeft.appendChild(noButton);
            buttonRight.appendChild(yesButton);
            noButton.onclick = () => {
                buttonPosition = 'left';
                submitAnswer('いいえ');
            };
            yesButton.onclick = () => {
                buttonPosition = 'right';
                submitAnswer('はい');
            };
            buttonOrderHistory.push('yes-right');
        } else {
            buttonLeft.appendChild(yesButton);
            buttonRight.appendChild(noButton);
            yesButton.onclick = () => {
                buttonPosition = 'left';
                submitAnswer('はい');
            };
            noButton.onclick = () => {
                buttonPosition = 'right';
                submitAnswer('いいえ');
            };
            buttonOrderHistory.push('yes-left');
        }
    } else {
        if (Math.random() > 0.5) {
            buttonLeft.appendChild(yesButton);
            buttonRight.appendChild(noButton);
            yesButton.onclick = () => {
                buttonPosition = 'left';
                submitAnswer('はい');
            };
            noButton.onclick = () => {
                buttonPosition = 'right';
                submitAnswer('いいえ');
            };
            buttonOrderHistory.push('yes-left');
        } else {
            buttonLeft.appendChild(noButton);
            buttonRight.appendChild(yesButton);
            noButton.onclick = () => {
                buttonPosition = 'left';
                submitAnswer('いいえ');
            };
            yesButton.onclick = () => {
                buttonPosition = 'right';
                submitAnswer('はい');
            };
            buttonOrderHistory.push('yes-right');
        }
    }

    if (buttonOrderHistory.length > 4) { 
        buttonOrderHistory.shift();
    }
}

// anaswerで「はい」「いいえ」「時間切れ」を受け取る　＋　回答時のデータを記録
function submitAnswer(answer) {
    stopTimer();
    const relation = relations[currentQuestionIndex]; // 
    const stimulusMap = {                             //刺激データ
        1: currentStimulusRow[0], 
        2: currentStimulusRow[1],
        3: currentStimulusRow[2],
        4: currentStimulusRow[3],
        5: currentStimulusRow[4]
    };
    
    const presentedRelations = [];
    for (let i = 1; i <= 4; i++) {
        if (relation[`Relation_${i}`] === 'N') {
            continue;  // relation_Xに'N'が入っている場合、ループを飛ばす
        }
        if (relation[`Relation_${i}`]) {
            const target1 = stimulusMap[relation[`sti_${i * 2 - 1}`]] || '';
            const target2 = stimulusMap[relation[`sti_${i * 2}`]] || '';
            presentedRelations.push({
                relation: relation[`Relation_${i}`],
                target1: target1,
                target2: target2,
                div: relation[`div_${i}`],
                type: relation[`type_${i}`]
            });
        }
    }
    
    const targetQ1 = stimulusMap[relation.sti_q1] || '';
    const targetQ2 = stimulusMap[relation.sti_q2] || '';
    let questionText = `${targetQ1} ${relation.div_q} ${targetQ2} ${relation.Question_1}`;

    if (relation.Question_2) {
        const targetQ3 = stimulusMap[relation.sti_q3] || '';
        const targetQ4 = stimulusMap[relation.sti_q4] || '';
        questionText += `${targetQ3} ${relation.div_q2} ${targetQ4} ${relation.Question_2}`;
    }

    const elapsedTime = timeRecords[timeRecords.length - 1].time;

    answers.push({
        participantID: participantID,
        questionNumber: currentQuestionIndex + 1,
        presentedRelations: presentedRelations,
        questionText: questionText,
        selectedAnswer: answer,
        buttonPosition: buttonPosition, // 追加: ボタンの位置を記録
        elapsedTime: elapsedTime
    });

    // 質問の準備画面を表示
    document.getElementById('question-text').innerHTML = '<div class="preparation-screen">+</div>';
    document.getElementById('relation-text').innerHTML = '';
    document.getElementById('button-left').innerHTML = '';
    document.getElementById('button-right').innerHTML = '';

    setTimeout(() => {
        // 質問の準備画面を削除し、次の質問を表示
        document.getElementById('question-text').innerHTML = '';
        currentQuestionIndex++;
        showQuestion();
    }, 500);
}

// タイマーの記録
function stopTimer() {
    clearInterval(timerInterval);
    const elapsedTime = (Date.now() - startTime) / 1000;
    timeRecords.push({ questionIndex: currentQuestionIndex, time: elapsedTime });
}

function updateCounter() {
    const counterElement = document.getElementById('counter');
    const maxDigits = relations.length.toString().length;
    const currentQuestionNumber = (currentQuestionIndex + 1).toString().padStart(maxDigits, '0');
    counterElement.textContent = `${currentQuestionNumber}/${relations.length}`;
}

function updateCounterColor() {
    const counterCard = document.getElementById('counter-card');
    const steps = stepsList[currentStepIndex];
    const percentage = (currentStep / (steps - 1)) * 100;
    counterCard.style.background = `linear-gradient(to top, rgb(0, 140, 255) ${percentage}%, rgb(255, 190, 70) ${percentage}%)`;

    currentStep++;
    if (currentStep >= steps) {
        currentStep = 0;
        currentStepIndex++;
        if (currentStepIndex >= stepsList.length) {
            currentStepIndex = stepsList.length - 1; // 最後のステップに留まる
        }
    }
}

function updateProgressBoxes() {
    const progressBoxesSurvey = document.querySelectorAll('#progress-boxes-survey .progress-box');
    const progressBoxesThankYou = document.querySelectorAll('#progress-boxes-thank-you .progress-box');
    let completedBoxes = 0;
    let questionsCovered = 0;

    for (let i = 0; i < stepsList.length; i++) {
        questionsCovered += stepsList[i];
        if (currentQuestionIndex >= questionsCovered) {
            completedBoxes++;
        }
    }

    for (let i = 0; i < progressBoxesSurvey.length; i++) {
        if (i < completedBoxes) {
            progressBoxesSurvey[i].style.backgroundColor = 'rgb(0, 140, 255)';
            if (progressBoxesThankYou[i]) {
                progressBoxesThankYou[i].style.backgroundColor = 'rgb(0, 140, 255)';
            }
        } else {
            progressBoxesSurvey[i].style.backgroundColor = 'rgb(255, 190, 70)';
            if (progressBoxesThankYou[i]) {
                progressBoxesThankYou[i].style.backgroundColor = 'rgb(255, 190, 70)';
            }
        }
    }
}

// 無作為化
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', loadQuestions);

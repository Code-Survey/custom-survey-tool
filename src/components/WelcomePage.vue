<template>
  <v-container>
    <v-stepper alt-labels next-text="weiter" prev-text="zurück" :items="progressItems">
      <template v-slot:item.1>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Untersuchung der Effekte von Fine-Tuning auf die Code-Qualität</v-card-title>
          <v-card-text>
            <p>Herzlich willkommen und vielen Dank, dass Sie sich Zeit nehmen, an meiner Umfrage teilzunehmen!</p>
            <br>
            <p>
              Ziel dieser Umfrage ist es, im Rahmen meiner Bachelorarbeit 
              'Analyse und Synthese von Komponenten GPT-basierter Code-Assistenten'<br> herauszufinden, 
              wie sich das Fine-Tuning von bereits trainierten Modellen auf die Qualität von generierten Code auswirkt.
            </p>
            <br>
            <p>Dazu erhalten Sie im Kontext dieser Umfrage 10 Paare von Java-Code-Snippets. 
              Jedes Paar besteht aus einem Code-Snippet, <br>das von einem nachtrainierten Sprachmodell 
              erstellt wurde, und einem solchen, das von einem nicht nachtrainierten Sprachmodell stammt.
              <br>Ihre Aufgabe ist es, die verschiedenen Java-Code-Snippets in Bezug auf Code-Qualität miteinander zu vergleichen. 
              Da es sich bei den Code-Snippets um Java Code handelt,<br>
              ist <strong>Erfahrung mit Java eine Voraussetzung</strong> für die Teilnahme an dieser Umfrage.</p>
            <br>
            <p>Die Umfrage sollte etwa 10 Minuten in Anspruch nehmen. Ihre ehrliche und detaillierte
              Bewertung ist entscheidend,<br> um fundierte Ergebnisse zu erzielen. Dabei werden Ihre
              Daten selbstverständlich anonym und vertraulich behandelt.</p>
            <br>
            <p>Falls Sie Fragen zur Umfrage haben, zögern Sie bitte nicht, mich zu kontaktieren
              (oliver.olbrueck@smail.inf.h-brs.de).</p>
            <br>
            <p>Vielen Dank für Ihre Unterstützung und Ihre wertvolle Zeit!</p>
            <br>
            <p>Mit freundlichen Grüßen,<br>
              Oliver Olbrück</p>

          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Eingangsfragen</v-card-title>
          <v-card-text>
            <v-text>Um die Umfrageergebnisse besser interpretieren zu können, werden zunächst einige
              Hintergrundinformationen erfasst.</v-text>
            <br>
            <br>
            <v-col cols="6">
              <v-text-field v-model="protocol.job" label="Welchen Beruf üben Sie aus?" variant="solo"
                persistent-hint></v-text-field>
              <v-text-field v-model="protocol.yearsOfJavaExperience"
                label="Wie viele Jahre Erfahrung haben Sie bereits mit der Programmiersprache Java?" type="number"
                variant="solo" persistent-hint></v-text-field>
              <v-radio-group v-model="protocol.usageOfAI">
                <template v-slot:label>
                  <div>Verwenden Sie regelmäßig KI-Tools zur Code-Generierung?</div>
                </template>
                <v-radio value="yes">
                  <template v-slot:label>
                    <div>Ja</div>
                  </template>
                </v-radio>
                <v-radio value="no">
                  <template v-slot:label>
                    <div>Nein</div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="6"></v-col>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 1</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_1_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_1_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part1Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part1Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.4>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 2</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_2_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_2_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part2Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part2Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.5>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 3</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_3_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_3_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part3Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part3Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.6>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 4</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_4_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_4_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part4Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part4Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.7>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 5</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_5_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_5_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part5Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part5Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.8>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 6</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_6_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_6_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part6Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part6Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.9>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 7</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_7_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_7_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part7Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part7Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.10>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 8</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_8_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_8_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part8Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part8Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.11>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 9</v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-img src="codeImages\img_9_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_9_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part9Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part9Comment" class="pt-3 pr-4 pl-4" style="width: 100%;" variant="solo"
                    persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.12>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschnitt 10</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols=2></v-col>
              <v-col>
                <v-img src="codeImages\img_10_a.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code A</strong></v-text>
                </div>
              </v-col>
              <v-col>
                <v-img src="codeImages\img_10_b.PNG"></v-img>
                <div class="d-flex flex-column align-center">
                  <v-text class="text-h6"><strong>Code B</strong></v-text>
                </div>
              </v-col>
              <v-col cols=2></v-col>
            </v-row>
            <v-divider class="pb-6"></v-divider>
            <div class="d-flex flex-column align-center">
              <v-radio-group v-model="protocol.part10Comparison">
                <div class="question pb-5 pl-2">Welcher Code-Ausschnitt weist Ihrer Meinung nach die
                  insgesamt höhere Code-Qualität auf?<em>(*)</em></div>
                <v-row>
                  <v-radio value="A" class="d-flex justify-end pr-5">
                    <template v-slot:label>
                      <div class="question">Code A</div>
                    </template>
                  </v-radio>
                  <v-radio value="E" class="d-flex justify-center">
                    <template v-slot:label>
                      <div class="question">Beide gleichwertig</div>
                    </template>
                  </v-radio>
                  <v-radio value="B">
                    <template v-slot:label>
                      <div class="question">Code B</div>
                    </template>
                  </v-radio>
                </v-row>
                <v-row>
                  <div class="question pl-5 pt-5">Warum sind Sie zu diesem Schluss gekommen? <em>Bitte begründen Sie
                      Ihre
                      Entscheidung.</em></div>
                  <v-textarea v-model="protocol.part10Comment" class="pt-3 pr-4 pl-4" style="width: 100%;"
                    variant="solo" persistent-hint label="(Optional)"></v-textarea>
                </v-row>
              </v-radio-group>
            </div>
          </v-card-text>
        </v-card>
      </template>

      <template v-slot:item.13>
        <v-card>
          <v-card-title class="text-h6 text-md-h5 text-lg-h4">Abschluss</v-card-title>
          <v-card-text>
            <v-btn @click="printProtocol" color="green" class="white--text">
              Befragung abschließen
            </v-btn>
            <div class="question pt-4">Sobald Sie auf "Befragung abschließen" klicken, können Ihre Antworten nicht mehr
              geändert werden.</div>
          </v-card-text>
        </v-card>
      </template>

    </v-stepper>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'WelcomePage',

  data: () => ({
    protocol: {},
    progressItems: ['Begrüßung', 'E.f.', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10', 'Abschluss'],
    step: 1,
  }),

  methods: {
    async printProtocol() {
      console.log(this.protocol);
      this.$router.push('/thank-you');
      //await this.sendProtocolObjectViaEmail();
    },
    async sendProtocolObjectViaEmail() {
      const formData = new FormData();
      formData.append('email', 'oligo99@t-online.de');
      formData.append('message', JSON.stringify(this.protocol, null, 2));

      try {
        const response = await fetch('https://formspree.io/f/xkgwvepr', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          this.formStatus = 'Danke für Ihre Einsendung!';
        } else {
          const data = await response.json();
          if (data.errors) {
            this.formStatus = data.errors.map(error => error.message).join(', ');
          } else {
            this.formStatus = 'Oops! Es gab ein Problem beim Absenden des Formulars.';
          }
        }
      } catch (error) {
        this.formStatus = 'Oops! Es gab ein Problem beim Absenden des Formulars.';
      }
    },
  },
}
</script>
<style scoped>
.question {
  font-size: 1.2em;
}
</style>

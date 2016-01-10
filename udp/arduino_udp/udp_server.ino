/*
 * Example UDP Server with Arduino Nano and ENC28J60

 * Based on: https://github.com/ntruchsess/arduino_uip
 *   UIPEthernet UdpServer example by
 *      Norbert Truchsess (norbert.truchsess@t-online.de)
 */

#include <UIPEthernet.h>

EthernetUDP udp;

void setup() {

  Serial.begin(9600);

  uint8_t mac[6] = {0x00,0x01,0x02,0x03,0x04,0x05};

  Ethernet.begin(mac,IPAddress(192,168,3,6));

  int success = udp.begin(5000);

  Serial.print("initialize: ");
  Serial.println(success ? "success" : "failed");

}


// include temperature sensor from Grove kit
const int B=4275;                 // B value of the thermistor
const int R0 = 100000;            // R0 = 100k

void loop() {
  int a = analogRead(A0);
  float R = 1023.0/((float)a)-1.0;
  R = 100000.0*R;

   //convert to sensor value to temperature via datasheet: 
  float temperature=1.0/(log(R/100000.0)/B+1/298.15)-273.15;

  int size = udp.parsePacket();
  if (size > 0) {
    
    udp.flush();
    
    int success;
    
    do {
      // wait for open connection
      success = udp.beginPacket(udp.remoteIP(),udp.remotePort());
    } while (!success);

    // send udp packets
    success = udp.print("temperature: ");
    udp.println(temperature);

    Serial.print("bytes written: ");
    Serial.println(success);

    success = udp.endPacket();

    Serial.print("endPacket: ");
    Serial.println(success ? "success" : "failed");

    udp.stop();

    //restart with new connection to receive packets from other clients
    Serial.print("restart connection: ");
    Serial.println (udp.begin(5000) ? "success" : "failed");
  }
}
